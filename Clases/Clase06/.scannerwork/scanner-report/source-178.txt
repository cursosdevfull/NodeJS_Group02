import { NextFunction, Request, Response } from 'express';
import { Responses } from '../utils';
export default class {
  static validate(schemaValidation: any): any {
    return async (
      req: Request,
      res: Response,
      next: NextFunction
    ): Promise<any> => {
      const typesParametersToValidate = ['body', 'params', 'headers', 'query'];

      const listValidations: Array<Promise<any>> = [];

      typesParametersToValidate.forEach(
        (type: 'body' | 'params' | 'headers' | 'query') => {
          if (schemaValidation.hasOwnProperty(type)) {
            listValidations.push(schemaValidation[type].validate(req[type]));
          }
        }
      );

      Promise.all(listValidations)
        .then((results) => {
          let validationHasError = false;
          results.forEach((result) => {
            if (result.hasOwnProperty('error') && !validationHasError) {
              validationHasError = true;
              Responses.sendErrorParameters(res, result.error);
            }
          });

          if (!validationHasError) {
            next();
          }
        })
        .catch((err) => {
          Responses.sendErrorParameters(res, err);
        });
    };
  }
}
