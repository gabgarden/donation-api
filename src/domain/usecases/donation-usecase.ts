import { v4 as uuid } from 'uuid';
import { Donation } from '../entities/donation';
import { IUseCase } from '../../contracts/iUseCase';
import { IRepository } from '../../contracts/iRepository';

export class DonationUseCase
  implements IUseCase<Omit<Donation, 'id' | 'createdAt' | 'status'>>
{
  private repository: IRepository<Donation>;

  constructor(repository: IRepository<Donation>) {
    this.repository = repository;
  }

  async perform(
    data: Omit<Donation, 'id' | 'createdAt' | 'status'>
  ): Promise<Donation | Error> {
    try {
      const id = uuid();
      const createdAt = new Date();
      const donator = data.donator;

      return await this.repository.create(
        new Donation(id, donator, createdAt, data.supplies)
      );
    } catch (error) {
      console.error('Error in DonationUseCase:', error);
      return new Error('Failed to create donation');
    }
  }
}
