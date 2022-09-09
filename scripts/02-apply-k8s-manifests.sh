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
apply_manifests '01-data-preper'
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
apply_manifests '12-webapp-client'