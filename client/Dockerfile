FROM node:20.14.0-alpine3.20
WORKDIR /frontend
COPY package.json .
RUN npm i --ignore-scripts -g serve
RUN yarn
COPY . .
RUN yarn build
EXPOSE 3000
CMD serve build
