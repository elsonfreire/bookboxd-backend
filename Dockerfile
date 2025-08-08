FROM node:22-slim
WORKDIR /usr/src/app

RUN apt-get update -y && \
    apt-get install -y openssl

COPY package*.json ./
RUN npm install && \
    npm install -g nodemon

COPY prisma ./prisma
RUN npx prisma generate

COPY . .

EXPOSE 3000
