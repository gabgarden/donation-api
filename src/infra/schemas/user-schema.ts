import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  createdAt: Date,
  address: String,
  phoneNumber: String,
});
