import mongoose from 'mongoose';

import { DonationStatus } from '../../enums/donation-status';

import { userSchema } from './user-schema';
import { supplySchema } from './supply-schema';

const donationSchema = new mongoose.Schema({
  id: String,
  donator: {
    type: userSchema,
    required: true,
  },
  createdAt: Date,
  status: {
    type: String,
    enum: Object.values(DonationStatus),
    default: DonationStatus.PENDING,
  },
  supplies: [supplySchema],
});

export default mongoose.model('Donations', donationSchema);
