import { Router } from 'express';
import { DonationFactory } from '../factories/donation-factory';

export function DonationRouter() {
  const factory = DonationFactory();
  const router = Router();

  router.get('/', (req, res) => {
    return res.send('Donation route is working');
  });

  router.post('/', async (req, res) => {
    try {
      await factory.handle(req, res);
    } catch (error) {
      console.error('Error in donation route:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

  return router;
}
