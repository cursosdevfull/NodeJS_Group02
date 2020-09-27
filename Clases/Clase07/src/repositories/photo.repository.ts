import { getRepository } from 'typeorm';
import { GenericRepository } from '.';
import { PhotoEntity } from '../entities/photo.entity';
import { IPhoto } from '../interfaces';
import { UserEntity } from '../entities/user.entity';

export default class byDefault extends GenericRepository<PhotoEntity> {
  constructor() {
    super(PhotoEntity);
  }

  async insertPhoto(idUser: number, photo: IPhoto): Promise<any> {
    const repositoryPhoto = getRepository(PhotoEntity);
    const repositoryUser = getRepository(UserEntity);

    const photoInserted = new PhotoEntity();
    photoInserted.fileName = photo.fileName;
    photoInserted.user = await repositoryUser.findOne(idUser);

    const result = await repositoryPhoto.save(photoInserted);

    return result;
  }

  async updatePhoto(
    idPhoto: number,
    idUser: number,
    photo: IPhoto
  ): Promise<any> {
    const repositoryPhoto = getRepository(PhotoEntity);
    const repositoryUser = getRepository(UserEntity);

    await repositoryPhoto.delete(idPhoto);

    const photoInserted = new PhotoEntity();
    photoInserted.fileName = photo.fileName;
    photoInserted.user = await repositoryUser.findOne(idUser);

    const result = await repositoryPhoto.save(photoInserted);

    return result;
  }
}
