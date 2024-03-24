# build environment
FROM node:21.1.0 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app
RUN npm install
RUN npm run build

# production environment
FROM nginx:1.23.2-alpine
RUN rm -rf /etc/nginx/conf.d
RUN mkdir -p /etc/nginx/conf.d
COPY ./nginx.conf /etc/nginx/conf.d/
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]