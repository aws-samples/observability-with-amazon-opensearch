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
COPY api/requirements.txt api/api.py api/.flaskenv ./api
RUN pip install -r ./api/requirements.txt
ENV FLASK_ENV production

EXPOSE 5000
WORKDIR /app/api
CMD ["gunicorn", "-b", ":5000", "api:app"]
