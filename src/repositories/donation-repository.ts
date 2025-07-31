import { IRepository } from '../contracts/iRepository';
import donationSchema from '../infra/schemas/donation-schema';

import { Donation } from '../domain/entities/donation';

export class DonationRepository implements IRepository<Donation> {
  async create(donation: Donation): Promise<Donation | Error> {
    donationSchema.create(donation);
    return donation;
  }
}
