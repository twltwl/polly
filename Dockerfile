FROM node:8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json package-lock.json ./
RUN npm install --production

ADD . /usr/src/app

RUN npm run build
EXPOSE 4711

CMD [ "npm", "start" ]