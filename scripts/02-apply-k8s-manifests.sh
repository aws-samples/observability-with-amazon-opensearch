#!/bin/bash

# Changing directory to build inside the application folders
cd ..

apply_manifests() {
    service_folder=$1
    cd sample-apps/$service_folder/
    echo $PWD # Check Directory
    kubectl apply -f kubernetes/
    cd ../..
}

apply_manifests '00-fluentBit'
apply_manifests '01-data-prepper'
apply_manifests '02-otel-collector'
apply_manifests '03-mysql'
apply_manifests '04-analytics-service'
apply_manifests '05-databaseService'
apply_manifests '06-orderService'
apply_manifests '07-inventoryService'
apply_manifests '08-paymentService'
apply_manifests '09-recommendationService'
apply_manifests '10-authenticationService'
apply_manifests '11-client'

sleep 2
echo -ne '#####                      (25%)\r'
sleep 3
echo -ne '#############              (50%)\r'
sleep 3
echo -ne '##################         (75%)\r'
sleep 3
echo -ne '#########################  (100%)\r'
echo -ne '\n'