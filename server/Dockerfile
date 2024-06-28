FROM node:20.15.0-alpine3.20
RUN adduser -D -g '' fadi
WORKDIR /backend
COPY package.json .
RUN npm i --ignore-scripts -g apidoc prisma ts-node-dev
RUN yarn --silent
COPY . .
USER fadi
EXPOSE ${DEV_PORT}
CMD yarn dev
