FROM node:18.7.0-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:18.7.0-alpine as runner

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production

EXPOSE 8080

CMD ["npm", "start"]