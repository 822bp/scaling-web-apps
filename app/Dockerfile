FROM node:18

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
COPY tsconfig.json /app

RUN yarn install

COPY ./src src
COPY ./public public

EXPOSE 3000

CMD ["yarn", "start"]