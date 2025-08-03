FROM node:22.17.1-slim
WORKDIR /frontend
COPY yarn.lock package.json ./
RUN yarn setup
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]
