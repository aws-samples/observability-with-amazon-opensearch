# Microservices Observability with Amazon OpenSearch Service Workshop

Amazon OpenSearch Service’s Trace Analytics functionality allows you to go beyond simple monitoring to understand not just what events are happening, but why they are happening. In this workshop, learn how to instrument, collect, and analyze metrics, traces, and log data all the way from user front ends to service backends and everything in between. Put this together with Amazon OpenSearch Service, AWS Distro for OpenTelemetry, FluentBit, and Data Prepper.

## Architecture
![architecture](/assets/arch.jpg)

## Instructions (full version):
Detailed Workshop instructions should be followed in this guide:  
https://catalog.us-east-1.prod.workshops.aws/workshops/1abb648b-2ef8-442c-a731-efbcb69c1e1e


## Instructions (short version): 🚀

### AWS CloudFormation
- CloudFormation temples are in the /cf-templates/ directory.
- Launch them from the AWS CloudFormation console.

  - **stack.yaml**: The stack will create all the resources needed to run the workshop. VPC, AWS Cloud9, Amazon OpenSearch Service and Reverse-Proxy Instance.

### AWS Cloud9 (Terminal)
  - Run the following commands on the Cloud9 [terminal] to install the necessary tools and configure environment variables.

 ```
 curl -sSL https://raw.githubusercontent.com/aws-samples/observability-with-amazon-opensearch/main/00-setup.sh | bash -s stable
 source ~/.bash_profile
 ```
 
 ### You must create the EKS Cluster parameter file.
  - Run the following command on the Cloud9 [terminal] to create the observability-workshop.yaml file. The command uses the environment variables configured on the last step to fill out the necessary information.
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
```
### Now it’s time to create our EKS Cluster with the eksctl tool.
  - Run the following command on the Cloud9 [terminal] (should take 15 minutes to complete).
   
 ```eksctl create cluster -f observability-workshop.yaml```
 
  - After creating the EKS Cluster, you must build and push the microservices images to the ECR repository (should take 5 minutes to complete).
 
 ```cd observability-with-amazon-opensearch/scripts/; bash 01-build-push.sh```
  
  ### You must change credentials and endpoint in DataPrepper.
  - Open the /observability-with-amazon-opensearch/sample-apps/01-data-preper/kubernetes/data-preper.yaml file via Cloud9 [editor] and replace the following variables with the corresponding values in the ’Outputs’ tab in CloudFormation. (You should only copy the content of the value of CloudFormation -> Output -> AOSDomainEndpoint [Key] instead of using "Copy Link".)
  
  ```
  hosts: [ "https://__AOS_ENDPOINT__" ]
  username: "__AOS_USERNAME__"
  password: "__AOS_PASSWORD__"
            
  vim /sample-apps/01-data-preper/kubernetes/data-preper.yaml
  ```
 
  ### As a final step in deploying the microservices, you must apply the Kubernetes manifests. 
  - Run the following command on the Cloud9 [terminal].
  
  ```bash 02-apply-k8s-manifests.sh```
  
  - Check that all created Pods are running, as follows (it may take a few seconds for all of them to start completely).

  ```watch -n 10 kubectl get pods --all-namespaces```

  - To get the Sample APP DNS endpoint.
  
  ```kubectl get svc -nclient-service | awk '{print $4}' | tail -n1```

### Browser
  - Validate the Sample App is working by opening the endpoint from the previous step in your browser:
  ``` kubectl get svc -nclient-service | awk '{print $4}' | tail -n1```
  
  - Access OpenSearch Dashboards (URL):
  ``` CloudFormation->Output->DashBoardPublicIP``` 
