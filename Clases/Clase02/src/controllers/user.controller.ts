import { Request, Response } from 'express';
import { UserRepository } from '../repositories';
import { nextTick } from 'process';

export default class {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
    this.getAll = this.getAll.bind(this);
    this.getAllAdmins = this.getAllAdmins.bind(this);
  }
  // constructor(private userRepository: UserRepository) {}

  async getAll(req: Request, res: Response) {
    const users = await this.userRepository.getAll();
    res.json(users);

    /*     res.writeHead(200, { 'content-type': 'application/json' });
    res.write(JSON.stringify(users));
    res.end();

    next(); */
  }

  /*              getAll = async (req: Request, res: Response) => {
                   const users = await this.userRepository.getAll();
                   res.json(users);
                 }; */

  async getAllAdmins(req: Request, res: Response) {
    const users = await this.userRepository.getAllAdmins();
    res.json(users);
  }
}
