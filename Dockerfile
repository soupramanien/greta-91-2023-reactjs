#projet multi-stage
FROM node:alpine as build-stage

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY ./ ./
RUN npm run build

FROM nginx:alpine as deploy-stage

COPY --from=build-stage /app/build/ /usr/share/nginx/html



