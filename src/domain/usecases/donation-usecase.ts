import { IUseCase } from '../../contracts/iUseCase';
import { Donation } from '../entities/Donation';
import { v4 } from 'uuid';
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
    const id = v4();
    const createdAt = new Date();
    const donator = data.donator;

    return this.repository.create(new Donation(id, donator, createdAt));
  }
}
