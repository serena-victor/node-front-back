FROM node:latest
WORKDIR /app

COPY package*.json ./
COPY ./ ./

RUN npm install

EXPOSE 3003
CMD ["npm","start"]
