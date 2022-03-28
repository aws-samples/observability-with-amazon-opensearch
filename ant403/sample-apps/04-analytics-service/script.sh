#!/bin/bash

java -javaagent:/app/opentelemetry-javaagent.jar -jar /app/spring-boot-application.jar
