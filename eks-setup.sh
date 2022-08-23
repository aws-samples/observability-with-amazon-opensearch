#!/bin/sh

STACK_NAME=$1

##### Setup environment variables #####
curl -sSL https://raw.githubusercontent.com/aws-samples/observability-with-amazon-opensearch/main/00-setup.sh | bash -s stable
source ~/.bash_profile

##### Setup OpenSearch details #####
export AOS_ENDPOINT=$(aws cloudformation describe-stacks --stack-name ${STACK_NAME} --query "Stacks[0].Outputs[?OutputKey=='AOSDomainEndpoint'].OutputValue" --output text)
export AOS_USERNAME=$(aws cloudformation describe-stacks --stack-name ${STACK_NAME} --query "Stacks[0].Outputs[?OutputKey=='AOSDomainUserName'].OutputValue" --output text)
export AOS_PASSWORD=$(aws cloudformation describe-stacks --stack-name ${STACK_NAME} --query "Stacks[0].Outputs[?OutputKey=='AOSDomainPassword'].OutputValue" --output text)

##### Replace with OpenSearch details in DataPrepper #####
sed -i -e "s/__AOS_ENDPOINT__/$AOS_ENDPOINT/g" observability-with-amazon-opensearch/sample-apps/01-data-preper/kubernetes/data-preper.yaml
sed -i -e "s/__AOS_USERNAME__/$AOS_USERNAME/g" observability-with-amazon-opensearch/sample-apps/01-data-preper/kubernetes/data-preper.yaml
sed -i -e "s/__AOS_PASSWORD__/$AOS_PASSWORD/g" observability-with-amazon-opensearch/sample-apps/01-data-preper/kubernetes/data-preper.yaml

##### Setup k8 yaml file #####
cat << EOF > observability-workshop.yaml
--- 
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: observability-workshop-eksctl
  region: ${AWS_REGION}
  version: "1.21"

vpc:
  id: "${MyVPC}" # MyVPC
  subnets:
    # must provide 'private' and/or 'public' subnets by availibility zone as shown
    private:
      ${AZS[0]}:
        id: "${PrivateSubnet1}" # PrivateSubnet1
      ${AZS[1]}:
        id: "${PrivateSubnet2}" # PrivateSubnet2
      ${AZS[2]}:
        id: "${PrivateSubnet3}" # PrivateSubnet3
    public:
      ${AZS[0]}:
        id: "${PublicSubnet1}" # PublicSubnet1
      ${AZS[1]}:
        id: "${PublicSubnet2}" # PublicSubnet2
      ${AZS[2]}:
        id: "${PublicSubnet3}" # PublicSubnet3

managedNodeGroups:
- name: nodegroup
  desiredCapacity: 3
  instanceType: t3.small

# To enable all of the control plane logs, uncomment below:
# cloudWatch:
#  clusterLogging:
#    enableTypes: ["*"]

secretsEncryption:
  keyARN: ${MASTER_ARN}
EOF

##### Create EKS cluster #####
eksctl create cluster -f observability-workshop.yaml

#####B uild and push the microservices images to the ECR repository #####
cd observability-with-amazon-opensearch/scripts/
bash 01-build-push.sh

##### Apply the Kubernetes manifest #####
bash 02-apply-k8s-manifests.sh

##### Check all pods are running #####
total_running_pods=0
time_end=$((SECONDS+300)) 

# Time out after 5 min
while [[ $total_running_pods -lt 22 && $SECONDS -lt $time_end ]]
do
    total_running_pods=$(kubectl get pods --all-namespaces | awk '{ if ($4 == "Running") { print } }' | wc -l)
    echo "$total_running_pods pods running"
done

##### Sample App hostname #####
echo "Sample App HostName:"
kubectl get svc -nclient-service | awk '{print $4}' | tail -n1