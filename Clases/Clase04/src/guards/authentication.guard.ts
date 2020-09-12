import { Request, Response, NextFunction } from 'express';
import { Responses, Token } from '../utils';

export default class {
  static async canActivate(req: Request, res: Response, next: NextFunction) {
    const headers = req.headers;

    if (headers['authorization']) {
      const parts = headers['authorization'].split(' ');

      if (parts.length > 1) {
        Token.validateAccessToken(parts[1]).then(
          (payload) => {
            res.locals.rolesUser = payload.roles;
            next();
          },
          (error) => {
            if (error.status === 401) {
              Responses.sentUserNotAuthenticated(res);
            } else {
              Responses.sentUserForbidden(res);
            }
          }
        );
      } else {
        Responses.sentUserNotAuthenticated(res);
      }
    } else {
      Responses.sentUserNotAuthenticated(res);
    }
  }
}
