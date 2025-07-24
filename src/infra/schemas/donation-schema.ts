import mongoose from 'mongoose';

import { User } from '../../domain/entities/User';

import { DonationStatus } from '../../enums/donation-status';

const DonationSchema = new mongoose.Schema({
  id: String,
  donator: User,
  createdAt: Date,
  status: {
    type: String,
    enum: Object.values(DonationStatus),
    default: DonationStatus.PENDING,
  },
  supplies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SupplyOfDonation' }],
});

export default mongoose.model('Donation', DonationSchema);
