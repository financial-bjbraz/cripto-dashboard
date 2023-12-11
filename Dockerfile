# Stage 1
FROM node:14.18-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

# Stage 2
FROM nginx:1.21.3-alpine
COPY --from=build-step /app/docs /usr/share/nginx/html


# docker build -t bjbraz/angular-app .
# docker run -d -it -p 80:80/tcp --name angular-app bjbraz/angular-app:latest
# ### STAGE 1: Build ###
# FROM node:14-alpine AS build
# WORKDIR /
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# ### STAGE 2: Run ###
# FROM nginx:1.17.1-alpine
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=build /dist /usr/share/nginx/html
