FROM alpine/git as clone-stage
ARG url
WORKDIR /app
RUN git clone ${url}


# Stage 0, "build-stage", based on Node.js, to build and compile Angular
FROM node:10 as build-stage
WORKDIR /app
COPY --from=clone-stage /app/tm-recipes-front/package*.json /app/
RUN npm install
COPY ./ /app/
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration
COPY ./nginx-custom.conf /nginx.conf

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
COPY --from=build-stage /nginx.conf /etc/nginx/nginx.conf