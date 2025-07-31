import { DonationItem } from './donation-item';
import { User } from './user';

import { DonationStatus } from '../../enums/donation-status';

export class Donation {
  id: string;
  donator: User;
  createdAt: Date;
  status: DonationStatus = DonationStatus.PENDING;
  supplies: DonationItem[];

  constructor(
    id: string,
    donator: User,
    createdAt: Date,
    supplies: DonationItem[]
  ) {
    this.donator = donator;
    this.createdAt = createdAt;
    this.id = id;
    this.supplies = supplies;
  }
}
