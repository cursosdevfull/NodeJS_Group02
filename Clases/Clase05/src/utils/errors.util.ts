import { NextFunction, Request, Response } from 'express';
import { Responses } from '.';
import { IError } from '../interfaces';

export default class {
  static catchAsync(
    ftn: (req: Request, res: Response, next: NextFunction) => Promise<any>
  ): any {
    return (req: Request, res: Response, next: NextFunction) => {
      return ftn(req, res, next).catch((error) => {
        if (error.hasOwnProperty('code')) {
          Responses.sentErrorDatabase(res, error);
        } else {
          const err: IError = new Error(error);
          err.status = 501;
          Responses.sentErrorServer(res, err);
        }
      });
    };
  }
}
