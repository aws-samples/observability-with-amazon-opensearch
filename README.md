# Instructions:

### CloudFormation
- CloudFormation temples are in the /cf-templates directory and must be executed in the sequence: 00 to 04;
- Launch them from the CloudFormation console:

  - 00-Network: You must create the network resources (VPC, Private Subnet, Public Subnet and Internet GW);
  - 01-Opensearch: You must create the Opensearch domain (inform the VPC ID and Private Subnet created in the previous step);
  - 02-Reverse-Proxy: You must create the reverse proxy that will be responsible for exposing the Amazon Opensearch Dashboard service (inform the VPC ID,Private Subnet created in the previous step and Opensearch endpoint);
  - 03-ECR: You must create the ECR repositories that will send the images;
  - 04-Cloud9: You must create the Cloud9 Workspace, where you will interact with the services and their settings (inform the VPC ID, Private Subnet created in the previous step);

### Cloud9:
  - In the AWS Management Console on the Services menu, click Cloud9;
  - Click Open IDE on the observabilityworkshop Cloud9 instance;
  - Click the gear icon in the top right to open the Preferences tab.
  - Select AWS SETTINGS from the left navigation menu.
  - Toggle off the AWS managed temporary credentials setting.
  - Close the Preferences tab.
  - Navigate to the terminal at the bottom of the screen. (If you do not see a terminal, click Window from the top menu, then New Terminal)

### Cloud9 (Terminal):
  - Remove existing temporary credentials: rm -vf ${HOME}/.aws/credentials
  - Run the 00-setup.sh script (curl -sSL https://raw.githubusercontent.com/rafael-gumiero/observability-aos/main/00-setup.sh | bash -s stable) via Cloud9 Workspace;
  - You must create the EKS Cluster -> Manifest!
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

  - Run the: "eksctl create cluster -f observability-workshop.yaml"
  - Run the: "observability-aos/scripts/01-build-push.sh", responsible for building and pushing the images to the ECR;
  - You must change credentials and endpoint in Fluentbit (/sample-apps/00-fluentBit/kubernetes/fluentbit.yaml);
  - You must change credentials and endpoint in DataPrepper (/sample-apps/01-data-preper/kubernetes/data-preper.yaml)
  - Run the: "observability-aos/scripts/02-apply-k8s-manifests.sh", responsible for applying the Kubernetes manifests;

### Browser
  - Access Sample APP (URL);
  - Access OpenSearch Dashboards (URL);

## Architecture
![architecture](/assets/arch.jpg)
