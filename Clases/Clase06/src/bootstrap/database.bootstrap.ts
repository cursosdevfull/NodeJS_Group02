import { genericDatabase } from '../interfaces/database.interface';
import mongoose from 'mongoose';
import { Message } from '../utils';
import yenv from 'yenv';

const env = yenv();

export default class implements genericDatabase {
  async initialize() {
    const promiseInitialize = new Promise((resolve, reject) => {
      const connectionString = `mongodb://${env.DATABASE.MONGO.USER}:${env.DATABASE.MONGO.PASS}@${env.DATABASE.MONGO.HOST}/${env.DATABASE.MONGO.DB}?authSource=${env.DATABASE.MONGO.AUTH}&retryWrites=true`;

      const options = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        poolSize: 10,
      };

      const callback = (error: any) => {
        if (error) {
          reject(error);
        } else {
          Message.log('Connected to MongoDB');
          resolve();
        }
      };

      mongoose.connect(connectionString, options, callback);
    });

    await promiseInitialize;
  }

  disconnect() {
    mongoose.disconnect();
  }
}
