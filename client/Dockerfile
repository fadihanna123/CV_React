FROM node:20.15.0-alpine3.20
RUN adduser -D -g '' fadi
WORKDIR /frontend
COPY yarn.lock package.json .
RUN yarn --silent
COPY . .
USER fadi
EXPOSE 3000
CMD yarn dev
