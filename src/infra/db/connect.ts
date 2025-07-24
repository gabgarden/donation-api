import mongoose from 'mongoose';
import dotenv from 'dotenv';

export default async function Main() {
  dotenv.config();

  try {
    mongoose.set('strictQuery', true);

    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@1stcluster.qp0zltg.mongodb.net/?retryWrites=true&w=majority&appName=1stCluster`
    );

    console.log('Connection established');
  } catch (err) {
    console.log(err);
  }
}
