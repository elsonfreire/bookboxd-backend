FROM node:22-slim
WORKDIR /usr/src/app

RUN apt-get update -y && apt-get install -y openssl

COPY package*.json ./
RUN npm install 
RUN npm install -g nodemon

COPY . .

RUN npx prisma generate

EXPOSE 3000
CMD ["nodemon","src/server.ts"]