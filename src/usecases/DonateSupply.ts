import { IUseCase } from './../contracts/iUseCase';
import { Donation } from './../entities/Donation';
import { makeDonationRepository } from '../infra/factories/MakeDonationRepository';
import { v4 } from 'uuid';

export class DonateSupply
  implements IUseCase<Omit<Donation, 'id' | 'createdAt' | 'status'>>
{
  private repository = makeDonationRepository();

  async perform(
    data: Omit<Donation, 'id' | 'createdAt' | 'status'>
  ): Promise<Donation | Error> {
    const id = v4();
    const createdAt = new Date();
    const requester = data.requester;

    return this.repository.create(new Donation(id, requester, createdAt));
  }
}
