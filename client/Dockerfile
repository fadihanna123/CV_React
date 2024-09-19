FROM node:20.17.0-alpine3.20
WORKDIR /frontend
COPY yarn.lock package.json ./
RUN yarn setup
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]
