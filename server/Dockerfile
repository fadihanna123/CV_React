FROM node:22.14.0-alpine
WORKDIR /backend
COPY package.json ./
RUN yarn setup
COPY ./ ./
EXPOSE ${DEV_PORT}
CMD ["yarn", "dev"]
