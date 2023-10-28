# Build

FROM node:18.15.0-alpine as build-step
RUN mkdir -p /app
RUN mkdir -p /app/kkdolar
RUN mkdir -p /kkdolar
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

# RUN
FROM nginx:1.17.1-alpine as prod-stage
COPY --from=build-step /app/dist/new-image /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]

# docker build -t front-new-image .
# docker run -d -it -p4500:4200 --name front-new-image-docker front-new-image