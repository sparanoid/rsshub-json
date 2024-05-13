FROM node:20-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY . /app

RUN apk add --no-cache chromium curl \
    && rm -rf /var/cache/*

RUN yarn --frozen-lockfile && \
    yarn cache clean

EXPOSE 1200

CMD [ "node", "index.js" ]
