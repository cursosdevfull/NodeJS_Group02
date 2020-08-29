import { Application } from 'express';
import http from 'http';
import app from '../app';
import { Message } from '../utils';

export default class {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  async initialize() {
    const promiseInitialize = new Promise((resolve, reject) => {
      const server = http.createServer(app);

      server
        .listen(3000)
        .on('listening', () => {
          Message.log('Server is runing');
          resolve();
        })
        .on('error', (error) => {
          reject(error);
        });
    });

    await promiseInitialize;
  }
}
