import app from './app';
import 'reflect-metadata';
import { DatabaseBootstrap, ServerBootstrap } from './bootstrap';
import { Message } from './utils';

const start = async () => {
  try {
    const serverBootstrap = new ServerBootstrap(app);
    const databaseBootstrap = new DatabaseBootstrap();
    await serverBootstrap.initialize();
    await databaseBootstrap.initialize();
  } catch (error) {
    Message.log(error);
  }
};

start();
