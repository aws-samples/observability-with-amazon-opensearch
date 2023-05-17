#!/bin/bash

java -javaagent:/app/aws-opentelemetry-agent.jar -jar /app/spring-boot-application.jar
