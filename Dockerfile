FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY . /app

RUN yarn --frozen-lockfile && \
    yarn cache clean

EXPOSE 3000

CMD [ "node", "index.js" ]
