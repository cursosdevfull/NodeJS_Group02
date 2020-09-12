import { Request, Response } from 'express';
import { UserRepository } from '../repositories';
import { Responses, Token } from '../utils';
import bcrypt from 'bcryptjs';
import { UserDocument } from '../interfaces';
import { Controller, Post } from '../decorators';
import { AuthenticationGuard, AuthorizationGuard } from '../guards';

@Controller('/auth', [
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('OPERATOR'),
])
export default class MiClase {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
    this.login = this.login.bind(this);
  }

  @Post('/')
  async login(req: Request, res: Response): Promise<any> {
    const email = req.body.email;
    const password = req.body.password;

    const user: UserDocument = await this.userRepository.getUserByEmail(email);

    console.log(user);

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const accessToken = Token.getAccessToken(user);
        const refreshToken = user.refreshToken;

        return Responses.sentOk(res, { accessToken, refreshToken });
      } else {
        return Responses.sentNotFound(res);
      }
    } else {
      return Responses.sentNotFound(res);
    }
  }
}
