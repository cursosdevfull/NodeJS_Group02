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
}
