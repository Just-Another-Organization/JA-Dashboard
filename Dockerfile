FROM node:lts-alpine as builder

WORKDIR /app
COPY package.json ./

RUN npm install && npm audit fix

COPY . .

RUN npm run build

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx-proxy.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
