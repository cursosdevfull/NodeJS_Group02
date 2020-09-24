import { Application } from 'express';
import http from 'http';
import app from '../app';
import { Message } from '../utils';
import yenv from 'yenv';
import { AddressInfo } from 'net';

const env = yenv();

// process.NODE_ENV   = development

/* env = {
  PORT: 3000,
  DATABASE: {
    MONGO: {
      HOST: 'localhost',
      USER: 'root',
      PASS: 'ElMund03sanch0',
      DB: 'school',
      AUTH: 'admin',
    },
  },
}; */

interface Address extends AddressInfo {
  port: number;
}

export default class {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  async initialize() {
    const promiseInitialize = new Promise((resolve, reject) => {
      const server: http.Server = http.createServer(app);

      server
        .listen(env.PORT)
        .on('listening', () => {
          // Message.log(`Server is running on port ${env.PORT}`);
          Message.log(
            `Server is running on port ${(server.address() as Address).port}`
          );
          resolve();
        })
        .on('error', (error) => {
          reject(error);
        });
    });

    await promiseInitialize;
  }
}
