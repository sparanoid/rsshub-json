import RSSHub from 'rsshub';
import express from 'express';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 1200;

RSSHub.init({
  // config
});

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.json({
    name: 'rsshub-json',
    status: 'ok'
  });
});

app.get('/*', (req, res, next) => {
  RSSHub.request(req.url)
    .then(data => {
      res.send(data);
    })
    .catch(e => {
      next(e);
    });
});

app.listen(port, () => {
  console.log(`rsshub-json listening on port ${port}`)
});
