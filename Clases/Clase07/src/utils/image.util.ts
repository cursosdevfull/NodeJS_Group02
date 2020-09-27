import multer from 'multer';
import jimp from 'jimp';
import { NextFunction, Request, Response } from 'express';

interface IError extends Error {
  status?: number;
}

export default class byDefault {
  static upload(field: string) {
    const options = {
      storage: multer.memoryStorage(),
      fileFilter: (req: any, file: any, cb: any) => {
        const isPhoto = file.mimetype.startsWith('image/');

        // req.file

        if (isPhoto) {
          return cb(null, true);
        }

        const error: IError = new Error('It is not an image');
        error.status = 500;

        cb(error, true);
      },
    };

    return multer(options).single(field);
  }

  static resize(field: string, width: number) {
    return async (req: Request, res: Response, next: NextFunction) => {
      if (!req.file) {
        return next();
      }

      // mimetype = "image/gif"  "image/jpg"  "image/png"

      const extension = req.file.mimetype.split('/')[1];
      const name = Date.now();

      const newName = `${name}.${extension}`;
      req.body[field] = newName;

      const photo = await jimp.read(req.file.buffer);
      await photo.resize(width, jimp.AUTO);
      await photo.write(`./public/photo/${newName}`);

      next();
    };
  }
}
