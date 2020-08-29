import { Application } from 'express';
import http from 'http';
import app from '../app';

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
          console.log('Server is runing');
          resolve();
        })
        .on('error', (error) => {
          reject(error);
          console.log(error);
        });
    });

    await promiseInitialize;
  }
}
