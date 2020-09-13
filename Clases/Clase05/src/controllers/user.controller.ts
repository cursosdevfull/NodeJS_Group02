import { UserRepository } from '../repositories';
import { Request, Response, NextFunction } from 'express';
import { UserDocument } from '../interfaces';
import { mappingUserGeneralDto } from '../dto';
import { Responses, Token } from '../utils';
import bcrypt from 'bcryptjs';
import { Controller, Delete, Get, Post, Put } from '../decorators';
import { AuthenticationGuard, AuthorizationGuard } from '../guards';
import { SchemaValidator, userSchemas } from '../validators';

@Controller('/users', [
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMINISTRATOR'),
])
export default class {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  @Get('/')
  async getAll(req: Request, res: Response) {
    const users: UserDocument[] = await this.userRepository.getAll();

    if (users && users.length) {
      return Responses.sentOk(res, mappingUserGeneralDto(users));
    }

    Responses.sentNotFound(res);
  }

  @Get('/:id')
  async getById(req: Request, res: Response) {
    const user: UserDocument = await this.userRepository.getById(req.params.id);
    Responses.sentOk(res, mappingUserGeneralDto(user));
  }

  @Post('/', [SchemaValidator.validate(userSchemas.POST_INSERT)])
  async insert(req: Request, res: Response, next: NextFunction) {
    const user = req.body;
    user.refreshToken = Token.getRefreshToken();
    user.password = await bcrypt.hash(user.password, 10);

    const userInserted: UserDocument = await this.userRepository.insert(user);
    Responses.sentOk(res, mappingUserGeneralDto(userInserted));
  }

  @Put('/:id')
  async update(req: Request, res: Response) {
    const user = req.body;
    const id = req.params.id;
    const userUpdated: UserDocument = await this.userRepository.update(
      id,
      user
    );
    Responses.sentOk(res, mappingUserGeneralDto(userUpdated));
  }

  @Delete('/:id')
  async delete(req: Request, res: Response) {
    const id = req.params.id;
    const userDeleted: UserDocument = await this.userRepository.delete(id);
    Responses.sentOk(res, mappingUserGeneralDto(userDeleted));
  }
}
