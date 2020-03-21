FROM node:12-slim

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

ENV ATLAS_URI=mongodb+srv://leo:leo@cluster0-jsbkd.gcp.mongodb.net/test?retryWrites=true

CMD [ "node", "server"]