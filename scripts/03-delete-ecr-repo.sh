#!/bin/bash

# Env Vars
export ACCOUNT_ID=$(aws sts get-caller-identity --output text --query Account)
export TOKEN=$(curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")
export AWS_REGION=$(curl -H "X-aws-ec2-metadata-token: $TOKEN" -s 169.254.169.254/latest/dynamic/instance-identity/document | jq -r '.region')

aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com

delete_repo_ecr() {
    echo "Deleting repo ${1} ..."
    repo_name=$1
    aws ecr delete-repository --repository-name $repo_name --force
}

delete_repo_ecr 'analytics-service'
delete_repo_ecr 'database-service'
delete_repo_ecr 'order-service'
delete_repo_ecr 'inventory-service'
delete_repo_ecr 'payment-service'
delete_repo_ecr 'recommendation-service'
delete_repo_ecr 'authentication-service'
delete_repo_ecr 'client-service'