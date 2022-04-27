# Observability with Amazon OpenSearch Service Workshop

Amazon OpenSearch Service’s Trace Analytics functionality allows you to go beyond simple monitoring to understand not just what events are happening, but why they are happening. In this workshop, learn how to instrument, collect, and analyze metrics, traces, and log data all the way from user front ends to service backends and everything in between. Put this together with Amazon OpenSearch Service, AWS Distro for OpenTelemetry, and Data Prepper.

## Architecture
![architecture](/assets/arch.jpg)

## Instructions (full version):
Detailed Workshop instructions should be followed in this guide:  
https://catalog.us-east-1.prod.workshops.aws/workshops/1abb648b-2ef8-442c-a731-efbcb69c1e1e

--

## Instructions (short version):
--

### CloudFormation
- CloudFormation temples are in the /cf-templates directory;
- Launch them from the CloudFormation console:

  - **stack.yaml**: The stack will create all the resources needed to run the workshop. VPC, Cloud9, Amazon OpenSearch and Reverse-Proxy Instance.

### AWS Cloud9 (Terminal):
  - Run the 00-setup.sh script:

 ```
 curl -sSL https://raw.githubusercontent.com/aws-samples/observability-with-amazon-opensearch/main/00-setup.sh | bash -s stable
 source ~/.bash_profile
 ```
 
 
  - You must create the Amazon EKS Cluster (parameters will be dynamically replaced according to Cloudformation->Output):
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
  - Run the (responsible for creating the Amazon EKS Cluster):
   
 ```eksctl create cluster -f observability-workshop.yaml```
 
  - Run the (responsible for building and pushing the images to the Amazon ECR): 
 
 ```cd observability-with-amazon-opensearch/scripts/; bash 01-build-push.sh```
 
  - You must change credentials and endpoint in Fluentbit (the parameters to be replaced must be checked in the CloudFormation-> Outputs [tab] of the first step):
  
  ```
  Host  __AOS_ENDPOINT__
  HTTP_User __AOS_USERNAME__
  HTTP_Passwd __AOS_PASSWORD__

  vim /sample-apps/00-fluentBit/kubernetes/fluentbit.yaml
  ```
  
  - You must change credentials and endpoint in DataPrepper (the parameters to be replaced must be checked in the CloudFormation-> Outputs [tab] of the first step):
  
  ```
  hosts: [ "https://__AOS_ENDPOINT__" ]
  username: "__AOS_USERNAME__"
  password: "__AOS_PASSWORD__"
            
  vim /sample-apps/01-data-preper/kubernetes/data-preper.yaml
  ```
  
  - Run the (responsible for applying the Kubernetes manifests):
  
  ```bash 02-apply-k8s-manifests.sh```
  
  - Run the (to get the Sample APP DNS endpoint):
  
  ```kubectl get svc -nclient-service | awk '{print $4}' | tail -n1```

### Browser
  - Access Sample APP (URL):
  ``` kubectl get svc -nclient-service | awk '{print $4}' | tail -n1```
  
  - Access OpenSearch Dashboards (URL):
  ``` CloudFormation->Output->DashBoardPublicIP``` 
