FROM node:12.12.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY ./migrations/createDatabase.sql /docker-entrypoint-initdb.d/

EXPOSE 5000