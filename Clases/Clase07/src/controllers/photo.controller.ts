import { Controller, Delete, Get, Post, Put } from '../decorators';
import { PhotoRepository } from '../repositories';
import { Request, Response } from 'express';
import { ImageHandler, Responses } from '../utils';

@Controller('/photo')
export default class {
  private photoRepository: PhotoRepository;

  constructor(photoRepository: PhotoRepository) {
    this.photoRepository = photoRepository;
  }

  @Get('/:id')
  async listPhotoByUser(req: Request, res: Response) {
    const photos = await this.photoRepository.getAll({ user: +req.params.id });

    return photos ? Responses.sentOk(res, photos) : Responses.sentNotFound(res);
  }

  @Post('/:id', [
    ImageHandler.upload('fileName'),
    ImageHandler.resize('fileName', 1000),
  ])
  async insertPhoto(req: Request, res: Response) {
    const photo = await this.photoRepository.insertPhoto(
      +req.params.id,
      req.body
    );

    return photo ? Responses.sentOk(res, photo) : Responses.sentNotFound(res);
  }

  @Delete('/:id')
  async deletePhoto(req: Request, res: Response) {
    const photoDeleted = await this.photoRepository.delete(+req.params.id);

    return photoDeleted
      ? Responses.sentOk(res, photoDeleted)
      : Responses.sentNotFound(res);
  }

  @Put('/:idPhoto/:idUser')
  async updatePhoto(req: Request, res: Response) {
    const photoUpdated = await this.photoRepository.updatePhoto(
      +req.params.idPhoto,
      +req.params.idUser,
      req.body
    );

    return photoUpdated
      ? Responses.sentOk(res, photoUpdated)
      : Responses.sentNotFound(res);
  }
}
