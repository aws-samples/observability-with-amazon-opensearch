#!/bin/bash

until [[ $(curl --write-out %{http_code} --output /dev/null --silent --head --fail https://OSS_DOMAIN:443 -u OSSDOMAIN_USERNAME:OSSDOMAIN_PASSWORD --insecure) == 200 ]]; do
  echo "Waiting for OpenSearch to be ready"
  sleep 1
done
java -Xms128m -Xmx128m -jar data-prepper.jar /usr/share/data-prepper/pipelines.yaml /usr/share/data-prepper/data-prepper-config.yaml
