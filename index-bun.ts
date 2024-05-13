import { Hono } from 'hono'
// @ts-ignore
import RSSHub from 'rsshub'
// import express from 'express';
// import morgan from 'morgan';

const SERVER_PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 1200

const app = new Hono()

RSSHub.init({
  // config
})

// app.use(morgan('combined'));

app.get('/', c => {
  return c.json({
    name: 'rsshub-json',
    status: 'ok',
  })
})

// Avoid returning favicon.ico. Or RSSHub will parse it as JSON and return an error.
// app.get('/favicon.ico', (req, res) => {
//   res.sendStatus(204);
// });

app.get('/*', c => {
  console.log(c.req.url);

  return c.text('GET /wild/*/card')
})

// app.get('/*', (c) => {
//   RSSHub.request(req.url)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(e => {
//       next(e);
//     });
// });

// app.listen(port, () => {
//   console.log(`rsshub-json listening on port ${port}`)
// });

app.onError((err, c) => {
  console.error('server error', err)
  return c.json({ code: 500, message: 'server error' }, 500)
})

export default {
  port: SERVER_PORT,
  fetch: app.fetch,
}
