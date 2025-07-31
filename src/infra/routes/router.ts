import { Router } from 'express';
import { DonationRouter } from './donation-route';

export default function router() {
  const mainRouter = Router();

  mainRouter.use('/donate', DonationRouter());

  return mainRouter;
}
