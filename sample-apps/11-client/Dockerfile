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
&& apk add --no-cache openjdk8-jre \
# add python3-dev for grpcio
&& apk add --no-cache python3 python3-dev

RUN mkdir /app
COPY . /app/

RUN pip3 install --upgrade pip
RUN pip3 install -r /app/requirements.txt
WORKDIR /app

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /app/wait
RUN chmod +x /app/wait
EXPOSE 5000
ENTRYPOINT [ "python3", "client.py" ]