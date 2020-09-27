import { genericDatabase } from '../interfaces/database.interface';

import { Message } from '../utils';
import yenv from 'yenv';
import { Connection, createConnection } from 'typeorm';

const env = yenv();
let clientDB: Connection;

export default class implements genericDatabase {
  async initialize() {
    const promiseInitialize = new Promise((resolve, reject) => {
      const parametersConnection = {
        type: env.DATABASE.TYPE,
        host: env.DATABASE.HOST,
        username: env.DATABASE.USERNAME,
        password: env.DATABASE.PASSWORD,
        database: env.DATABASE.NAME,
        port: env.DATABASE.PORT,
        entities: [env.DATABASE.ENTITIES],
        synchronize: env.DATABASE.SYNCHRONIZE,
      };

      createConnection(parametersConnection)
        .then((connection) => {
          clientDB = connection;
          Message.log('Connected to database');
          resolve();
        })
        .catch((error) => {
          Message.log('Error while connecting to database');
          reject(error);
        });
    });

    await promiseInitialize;
  }

  closeConnection() {
    if (clientDB) {
      clientDB.close();
    }
  }
}
