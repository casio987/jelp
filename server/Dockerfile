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

COPY --from=builder /app/dist .

EXPOSE 3001

CMD ["npm", "run", "start:production"]