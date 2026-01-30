FROM node:24.12-alpine
WORKDIR /frontend
COPY yarn.lock package.json ./
RUN yarn setup
COPY ./ ./
EXPOSE 3000
CMD ["yarn", "dev"]
