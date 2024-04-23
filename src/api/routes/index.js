import bodyParser from 'body-parser';
import { Router } from 'express';
import middlewares from '../middleware';

const route = Router();

export default (app) => {
  app.use('/smtp', route);

  route.post('/send', bodyParser.json(), middlewares.wrap(require('./send-email').default));
  return app;
};
