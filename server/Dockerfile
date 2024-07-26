FROM node:20.16.0-alpine3.20
WORKDIR /backend
COPY package.json ./
RUN npm i --ignore-scripts -g apidoc prisma ts-node-dev
RUN yarn --silent
COPY . .
EXPOSE ${DEV_PORT}
CMD ["yarn", "dev"] dev
