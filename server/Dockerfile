FROM node:22.14.0-alpine3.20
WORKDIR /backend
COPY package.json ./
RUN npm i --ignore-scripts -g prisma ts-node-dev
RUN yarn setup
COPY . .
EXPOSE ${DEV_PORT}
CMD ["yarn", "dev"]
