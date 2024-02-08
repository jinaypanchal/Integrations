FROM node:20.11.0-alpine

WORKDIR /usr/src/
COPY package*.json ./
RUN npm ci --omit=dev
COPY ./src ./src

# Installing additional dependencies
RUN apk add --no-cache bash

CMD npm start
