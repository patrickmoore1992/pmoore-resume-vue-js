# build stage
ARG VAR1
ARG VAR2

FROM node:14.17.0-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:1.a13.12-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN mkdir /etc/letsencrypt

# TODO: fix the lets_encrypt to do this for you??
COPY fullchain.pem /etc/letsencrypt
COPY privkey.pem /etc/letsencrypt

RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf