FROM alpine/git as clone-stage
ARG url
WORKDIR /app
RUN git clone ${url}


# Stage 0, "build-stage", based on Node.js, to build and compile Angular
FROM node:11 as build-stage
#FROM node:9-alpine as build-stage
ARG project
WORKDIR /app
COPY --from=clone-stage /app/${project}/package*.json /app/
#RUN npm install -g @angular/cli@latest
#RUN npm install npm@6.5.0 -g
RUN npm install
COPY ./ /app/
ARG configuration=production
## Build the angular app in production mode and store the artifacts in dist folder
#RUN $(npm bin)/ng build --prod
RUN npm run build -- --output-path=./dist/out --prod 
#--configuration $configuration
COPY ./nginx-custom.conf /nginx.conf

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
COPY --from=build-stage /nginx.conf /etc/nginx/nginx.conf