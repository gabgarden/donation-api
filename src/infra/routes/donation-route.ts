import express from 'express';

import { DonationFactory } from '../factories/donation-factory';

export async function DonationRouter() {
  const factory = DonationFactory();
  const app = express();

  app.post('/', (req, res) => {
    return factory.handle(req, res);
  });
}
