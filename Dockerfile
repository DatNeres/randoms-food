FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

RUN yarn global add serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
