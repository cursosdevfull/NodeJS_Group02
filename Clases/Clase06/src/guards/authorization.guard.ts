import { NextFunction, Request, Response } from 'express';
import { Responses } from '../utils';

export default class {
  // canActivate('ADMIN', 'OPERATOR')
  static canActivate(...rolesAllowed: string[]) {
    //rolesAllowed = ["ADMIN", "OPERATOR"]
    return (req: Request, res: Response, next: NextFunction) => {
      let matched = false;
      const rolesUser = res.locals.rolesUser;

      rolesUser.forEach((role: { roleName: string }) => {
        if (rolesAllowed.indexOf(role.roleName) > -1) {
          matched = true;
        }
      });

      if (matched) {
        next();
      } else {
        Responses.sentUserForbidden(res);
      }
    };
  }
}
