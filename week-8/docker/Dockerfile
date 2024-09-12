FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm i yarn
RUN yarn install
RUN yarn run build

EXPOSE 3000

CMD ["node", "dist/index.js"]
