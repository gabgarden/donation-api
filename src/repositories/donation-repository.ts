import { IRepository } from '../contracts/iRepository';

import { Donation } from '../domain/entities/Donation';

export class DonationRepository implements IRepository<Donation> {
  async create(item: Donation): Promise<Donation | Error> {
    // Implement logic to create a new donation
    throw new Error('Method not implemented.');
  }
}
