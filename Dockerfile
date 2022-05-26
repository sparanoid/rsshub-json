FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY . /app

RUN apk add --no-cache chromium \
    && rm -rf /var/cache/*

RUN yarn --frozen-lockfile && \
    yarn cache clean

EXPOSE 3000

CMD [ "node", "index.js" ]
