import 'reflect-metadata';
import app from './app';
import { DatabaseBootstrap, ServerBootstrap } from './bootstrap';
import { Message } from './utils';

const start = async () => {
  const serverBootstrap = new ServerBootstrap(app);
  const databaseBootstrap = new DatabaseBootstrap();

  try {
    await serverBootstrap.initialize();
    await databaseBootstrap.initialize();
  } catch (error) {
    Message.log(error);
    databaseBootstrap.closeConnection();
    process.exit(1);
  }
};

start();
