import { Response } from 'express';

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
}
