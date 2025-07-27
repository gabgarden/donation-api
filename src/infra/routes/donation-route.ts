import express from 'express';

import { DonationFactory } from '../factories/donation-factory';

export async function DonationRouter() {
  const factory = DonationFactory();
  const app = express();

  app.get('/', (req, res) => {
    return res.send('Donation route is working');
  });

  app.post('/', (req, res) => {
    return factory.handle(req, res);
  });
}
