import { Request, Response } from 'express';
import { UserRepository } from '../repositories';
import { Responses, Token } from '../utils';
import bcrypt from 'bcryptjs';
import { UserDocument } from '../interfaces';
import { Controller, Post } from '../decorators';
import { AuthenticationGuard, AuthorizationGuard } from '../guards';

@Controller('/auth')
export default class {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
    this.login = this.login.bind(this);
  }

  @Post('/login')
  async login(req: Request, res: Response): Promise<any> {
    const email = req.body.email;
    const password = req.body.password;

    const user: UserDocument = await this.userRepository.getUserByEmail(email);

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

  @Post('/register')
  async register(req: Request, res: Response): Promise<any> {}
}
