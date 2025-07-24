import { IRepository } from '../../contracts/iRepository';
import { Donation } from '../../entities/Donation';
import { DonationRepository } from './../../repositories/DotationRepository';

export function makeDonationRepository(): IRepository<Donation> {
  const donationRepository = new DonationRepository();

  return donationRepository;
}
