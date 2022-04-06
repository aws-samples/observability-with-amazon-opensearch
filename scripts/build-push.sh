#!/bin/sh

ECR_ID=$1

aws ecr-public get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin public.ecr.aws/${ECR_ID}

cd ..
cd sample-apps/04-analytics-service/
docker build -t analytics-service .
docker tag analytics-service:latest public.ecr.aws/${ECR_ID}/analytics-service:latest
docker push public.ecr.aws/${ECR_ID}/analytics-service:latest
cd ../..

cd sample-apps/05-databaseService/
docker build -t database-service .
docker tag database-service:latest public.ecr.aws/${ECR_ID}/database-service:latest
docker push public.ecr.aws/${ECR_ID}/database-service:latest
cd ../..

cd sample-apps/06-orderService/
docker build -t order-service .
docker tag order-service:latest public.ecr.aws/${ECR_ID}/order-service:latest
docker push public.ecr.aws/${ECR_ID}/order-service:latest
cd ../..

cd sample-apps/07-inventoryService/
docker build -t inventory-service .
docker tag inventory-service:latest public.ecr.aws/${ECR_ID}/inventory-service:latest
docker push public.ecr.aws/${ECR_ID}/inventory-service:latest
cd ../..

cd sample-apps/08-paymentService/
docker build -t payment-service .
docker tag payment-service:latest public.ecr.aws/${ECR_ID}/payment-service:latest
docker push public.ecr.aws/${ECR_ID}/payment-service:latest
cd ../..

cd sample-apps/09-recommendationService/
docker build -t recommendation-service .
docker tag recommendation-service:latest public.ecr.aws/${ECR_ID}/recommendation-service:latest
docker push public.ecr.aws/${ECR_ID}/recommendation-service:latest
cd ../..

cd sample-apps/10-authenticationService/
docker build -t authentication-service .
docker tag authentication-service:latest public.ecr.aws/${ECR_ID}/authentication-service:latest
docker push public.ecr.aws/${ECR_ID}/authentication-service:latest
cd ../..

cd sample-apps/11-client/
docker build -t client-service .
docker tag client-service:latest public.ecr.aws/${ECR_ID}/client-service:latest
docker push public.ecr.aws/${ECR_ID}/client-service:latest
