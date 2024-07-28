FROM node:20.16.0-alpine3.20
WORKDIR /frontend
COPY yarn.lock package.json ./
RUN yarn --silent --ignore-scripts --emoji
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]
