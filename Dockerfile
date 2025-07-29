FROM node:22-slim
WORKDIR /usr/src/app
COPY . .
RUN npm install 
RUN npm run build
EXPOSE 3000
CMD ["node","dist/server.js"]