FROM node:lts
WORKDIR /node
COPY ./ .
RUN npm i -g apidoc prisma ts-node-dev
RUN yarn
EXPOSE 5000
CMD yarn dev
