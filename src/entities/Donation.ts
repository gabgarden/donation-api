import { SupplyOfDonation } from './SupplyOfDonation';
import { User } from './User';
import { DonationStatus } from '../enums/DonationStatus';

export class Donation {
  id: string;
  requester: User;
  createdAt: Date;
  status: DonationStatus = DonationStatus.PENDING;
  supplies: SupplyOfDonation[];

  constructor(id: string, requester: User, createdAt: Date) {
    this.requester = requester;
    this.createdAt = createdAt;
    this.id = id;
  }
}
