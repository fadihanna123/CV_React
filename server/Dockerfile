FROM node:22.20-alpine
WORKDIR /backend
COPY package.json ./
RUN yarn setup
COPY ./ ./
EXPOSE ${DEV_PORT}
CMD ["yarn", "dev"]
