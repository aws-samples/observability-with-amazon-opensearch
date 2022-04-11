# Instructions:

### CloudFormation
- CloudFormation temples are in the /cf-templates directory;
- Launch them from the CloudFormation console:

  - **stack.yaml**: The stack will create all the resources needed to run the workshop. VPC, Cloud9, Amazon OpenSearch and Reverse-Proxy Instance.

### Cloud9 (Terminal):
  - Run the 00-setup.sh script (```curl -sSL https://raw.githubusercontent.com/rafael-gumiero/observability-aos/main/00-setup.sh | bash -s stable```) via Cloud9 Workspace;
  - You must create the EKS Cluster -> Manifest!
```
cat << EOF > observability-workshop.yaml
--- 
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: observability-workshop-eksctl
  region: ${AWS_REGION}
  version: "1.21"

vpc:
  id: "vpc-CHANGE_HERE"  # (VPC ID used for each subnet below)
  subnets:
    # must provide 'private' and/or 'public' subnets by availibility zone as shown
    private:
      us-east-1a:
        id: "subnet-CHANGE_HERE"
      us-east-1b:
        id: "subnet-CHANGE_HERE"
      us-east-1c:
        id: "subnet-CHANGE_HERE"
    public:
      us-east-1a:
        id: "subnet-CHANGE_HERE"
      us-east-1b:
        id: "subnet-CHANGE_HERE"
      us-east-1c:
        id: "subnet-CHANGE_HERE"

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
```
  - Run the: ```eksctl create cluster -f observability-workshop.yaml```
  - Run the: ```cd observability-aos/scripts/; bash 01-build-push.sh```, responsible for building and pushing the images to the ECR;
  - You must change credentials and endpoint in Fluentbit (/sample-apps/00-fluentBit/kubernetes/fluentbit.yaml);
  - You must change credentials and endpoint in DataPrepper (/sample-apps/01-data-preper/kubernetes/data-preper.yaml)
  - Run the: ```bash 02-apply-k8s-manifests.sh```, responsible for applying the Kubernetes manifests;
  - Run the: ```kubectl get svc -nclient-service | awk '{print $4}' | tail -n1```, to get the Sample APP DNS endpoint;

### Browser
  - Access Sample APP (URL);
  - Access OpenSearch Dashboards (URL);

## Architecture
![architecture](/assets/arch.jpg)
