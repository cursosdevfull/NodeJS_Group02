import { Controller, Delete, Get, Post, Put } from '../decorators';
import { UserRepository } from '../repositories';
import { Request, Response } from 'express';
import { Responses } from '../utils';
import { UserMapping } from '../dto';

@Controller('/user')
export default class {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  @Get('/')
  async getAll(req: Request, res: Response): Promise<any> {
    const records = await this.userRepository.getAll({}, [], {
      lastName: 'ASC',
      firstName: 'ASC',
    });

    return records
      ? Responses.sentOk(res, UserMapping(records))
      : Responses.sentNotFound(res);
  }

  @Post('/')
  async insert(req: Request, res: Response): Promise<any> {
    const user = req.body;
    const userInserted = await this.userRepository.insert(user);

    return userInserted
      ? Responses.sentOk(res, UserMapping(userInserted))
      : Responses.sentNotFound(res);
  }

  @Put('/:id')
  async update(req: Request, res: Response): Promise<any> {
    const user = req.body;
    const id = +req.params.id;

    const userUpdated = await this.userRepository.update(user, { id });

    return userUpdated
      ? Responses.sentOk(res, UserMapping(userUpdated))
      : Responses.sentNotFound(res);
  }

  @Delete('/:id')
  async delete(req: Request, res: Response): Promise<any> {
    const id = +req.params.id;

    const userDeleted = await this.userRepository.delete(id);

    return userDeleted
      ? Responses.sentOk(res, UserMapping(userDeleted))
      : Responses.sentNotFound(res);
  }
}
