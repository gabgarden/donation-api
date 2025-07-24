import { DonationItem } from './DonationItem';
import { User } from './User';

import { DonationStatus } from '../../enums/donation-status';

export class Donation {
  id: string;
  donator: User;
  createdAt: Date;
  status: DonationStatus = DonationStatus.PENDING;
  supplies: DonationItem[];

  constructor(id: string, donator: User, createdAt: Date) {
    this.donator = donator;
    this.createdAt = createdAt;
    this.id = id;
  }
}
