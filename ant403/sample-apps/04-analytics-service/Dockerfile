FROM gradle:6.5.0-jdk8 as cache
RUN mkdir -p /home/gradle/cache_home
ENV GRADLE_USER_HOME /home/gradle/cache_home
COPY ./build.gradle /home/gradle/src/
WORKDIR /home/gradle/src
RUN gradle clean build --daemon

FROM gradle:6.5.0-jdk8 AS build
COPY --from=cache /home/gradle/cache_home /home/gradle/.gradle
COPY . /home/gradle/src/
WORKDIR /home/gradle/src
RUN gradle bootJar --daemon

RUN wget https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/download/v1.12.0/opentelemetry-javaagent.jar

FROM alpine:3.8.5

RUN apk update \
&& apk upgrade \
# add for grpcio
&& apk add --no-cache g++ \
# add for grpcio
&& apk add --no-cache linux-headers \
&& apk add --no-cache bash \
&& apk add --no-cache --virtual=build-dependencies unzip \
&& apk add --no-cache curl \
&& apk add --no-cache openjdk8-jre

RUN mkdir /app
COPY . /app/
COPY --from=build /home/gradle/src/build/libs/*.jar /app/spring-boot-application.jar
COPY --from=build /home/gradle/src/opentelemetry-javaagent.jar /app/opentelemetry-javaagent.jar
COPY ./script.sh /app/
RUN chmod +x /app/script.sh
EXPOSE 8087

ENTRYPOINT ["/app/script.sh"]