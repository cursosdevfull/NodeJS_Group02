import app from './app';
import { DatabaseBootstrap, ServerBootstrap } from './bootstrap';

const start = async () => {
  try {
    const serverBootstrap = new ServerBootstrap(app);
    const databaseBootstrap = new DatabaseBootstrap();
    await serverBootstrap.initialize();
  } catch (error) {
    console.log(error);
  }
};

start();

/* serverBootstrap
  .initialize()
  .then(() => console.log('Promise resolved'))
  .catch((error) => console.log('Promise rejected', error)); */
