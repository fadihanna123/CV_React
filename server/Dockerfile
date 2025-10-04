FROM node:22.17.1-slim
WORKDIR /backend
COPY package.json ./
RUN yarn setup
RUN apt-get update -y && apt-get install -y openssl
COPY ./ ./
EXPOSE ${DEV_PORT}
CMD ["yarn", "dev"]
