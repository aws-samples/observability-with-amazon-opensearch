#!/bin/bash

# Env Vars
export ACCOUNT_ID=$(aws sts get-caller-identity --output text --query Account)
export AWS_REGION=$(curl -s 169.254.169.254/latest/dynamic/instance-identity/document | jq -r '.region')
export AZS=($(aws ec2 describe-availability-zones --query 'AvailabilityZones[].ZoneName' --output text --region $AWS_REGION))

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin ${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com

# Changing directory to build inside the application folders
cd ..

push_images_ecr() {
    echo "Building ${2} ..."
    service_folder=$1
    repo_name=$2
    cd sample-apps/$service_folder/
    echo $PWD # Check Directory
    docker build -t $repo_name .
    docker tag $repo_name:latest ${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/$repo_name:latest
    docker push ${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/$repo_name:latest
    sed -i -e "s/__ACCOUNT_ID__/${ACCOUNT_ID}/g" kubernetes/01-deployment.yaml
    sed -i -e "s/__AWS_REGION__/${AWS_REGION}/g" kubernetes/01-deployment.yaml
    rm -rf kubernetes/01-deployment.yaml-e
    cd ../..
}

push_images_ecr '04-analytics-service' 'analytics-service'
push_images_ecr '05-databaseService' 'database-service'
push_images_ecr '06-orderService' 'order-service'
push_images_ecr '07-inventoryService' 'inventory-service'
push_images_ecr '08-paymentService' 'payment-service'
push_images_ecr '09-recommendationService' 'recommendation-service'
push_images_ecr '10-authenticationService' 'authentication-service'
push_images_ecr '11-client' 'client-service'