import { genericDatabase } from '../interfaces/database.interface';
import mongoose from 'mongoose';
import { Message } from '../utils';

export default class implements genericDatabase {
  async initialize() {
    const promiseInitialize = new Promise((resolve, reject) => {
      const connectionString = `mongodb://root:ElMund03sanch0@localhost/school?authSource=admin&retryWrites=true`;

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
}
