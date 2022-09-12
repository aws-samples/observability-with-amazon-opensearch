# Build step #1: build the React front end
FROM node:16-alpine as build-step
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY *.json ./
COPY ./src ./src
COPY ./public ./public
RUN npm install
RUN npm run build

# Build step #2: build the API with the client as static files
FROM python:3.7-slim
WORKDIR /app
COPY --from=build-step /app/build ./build

RUN mkdir ./api
COPY api/requirements.txt api/api.py api/.flaskenv ./api/
RUN pip install -r ./api/requirements.txt
ENV FLASK_ENV production

# Make sure we use the virtualenv:
ENV PATH="/app/env/bin:$PATH"

EXPOSE 5000
WORKDIR /app/api
ENTRYPOINT [ "python3", "client.py" ]