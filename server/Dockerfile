FROM node:22.17.1-slim
WORKDIR /backend
COPY package.json ./
RUN yarn setup
COPY ./ ./
EXPOSE ${DEV_PORT}
CMD ["yarn", "dev"]
