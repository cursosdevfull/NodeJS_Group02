import { Response } from 'express';
import { IError } from '../interfaces';

export default class {
  static sentOk(res: Response, result: any | any[]) {
    res.status(200).json({
      status: 200,
      result,
    });
  }

  static sentNotFound(res: Response, message: string = 'Not found') {
    res.status(404).json({
      status: 404,
      message,
    });
  }

  static sentUserNotAuthenticated(
    res: Response,
    message: string = 'User is not authenticated'
  ) {
    res.status(401).json({
      status: 401,
      message,
    });
  }

  static sentUserForbidden(res: Response, message: string = 'User forbidden') {
    res.status(409).json({
      status: 409,
      message,
    });
  }

  static sentErrorDatabase(res: Response, message: object) {
    res.status(500).json({
      status: 500,
      message,
    });
  }

  static sentErrorServer(res: Response, err: IError) {
    const dataError: any = {
      status: err.status,
      message: err.message,
    };

    if (process.env.NODE_ENV === 'development') {
      dataError.stack = err.stack;
    }

    res.status(err.status).json(dataError);
  }

  static sendErrorParameters(res: Response, result: any) {
    const dataError = Object.assign({}, result);
    if (process.env.NODE_ENV !== 'development') {
      delete dataError._original;
    }
    res.status(411).json({ status: 411, dataError });
  }
}
