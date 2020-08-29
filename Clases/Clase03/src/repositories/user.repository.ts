import { UserRepositoryInterface } from '../interfaces';

export default class implements UserRepositoryInterface {
  async getAll() {
    const promiseUsers = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { username: 'user01', password: '123' },
          { username: 'user02', password: '4567' },
        ]);
      }, 1500);
    });

    const users = await promiseUsers;
    return users;
  }

  async getAllAdmins() {
    const promiseUsers = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { username: 'user03', password: '123' },
          { username: 'user04', password: '456' },
        ]);
      }, 1500);
    });

    const users = await promiseUsers;
    return users;
  }
}
