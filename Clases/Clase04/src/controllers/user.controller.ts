import { UserRepository } from '../repositories';
import { Request, Response } from 'express';
import { UserDocument } from '../interfaces';
import { mappingUserGeneralDto } from '../dto';
import { Responses, Token } from '../utils';
import bcrypt from 'bcryptjs';

export default class {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(req: Request, res: Response) {
    const users: UserDocument[] = await this.userRepository.getAll();

    if (users && users.length) {
      return Responses.sentOk(res, mappingUserGeneralDto(users));
    }

    Responses.sentNotFound(res);
  }

  async getById(req: Request, res: Response) {
    const user: UserDocument = await this.userRepository.getById(req.params.id);
    Responses.sentOk(res, mappingUserGeneralDto(user));
  }

  async insert(req: Request, res: Response) {
    const user = req.body;
    user.refreshToken = Token.getRefreshToken();
    user.password = await bcrypt.hash(user.password, 10);

    const userInserted: UserDocument = await this.userRepository.insert(user);
    Responses.sentOk(res, mappingUserGeneralDto(userInserted));
  }

  async update(req: Request, res: Response) {
    const user = req.body;
    const id = req.params.id;
    const userUpdated: UserDocument = await this.userRepository.update(
      id,
      user
    );
    Responses.sentOk(res, mappingUserGeneralDto(userUpdated));
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;
    const userDeleted: UserDocument = await this.userRepository.delete(id);
    Responses.sentOk(res, mappingUserGeneralDto(userDeleted));
  }
}
