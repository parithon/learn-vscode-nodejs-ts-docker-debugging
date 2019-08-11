FROM node:12.7.0-alpine

WORKDIR /app

COPY ./package*.json ./
RUN npm ci

COPY . .
RUN npm run build

CMD ["npm","start"]