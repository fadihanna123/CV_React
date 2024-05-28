FROM node:lts
WORKDIR /frontend
COPY package.json .
RUN yarn
COPY . .
EXPOSE 3000
CMD yarn dev
