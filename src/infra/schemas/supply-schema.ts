import { SupplyCategory } from 'enums/supply-category';
import mongoose from 'mongoose';

export const supplySchema = new mongoose.Schema({
  id: String,
  name: String,
  category: {
    type: String,
    enum: Object.values(SupplyCategory),
  },
});
