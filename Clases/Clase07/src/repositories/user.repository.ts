import { GenericRepository } from '.';
import { UserEntity } from '../entities/user.entity';

export default class byDefault extends GenericRepository<UserEntity> {
  constructor() {
    super(UserEntity);
  }
}
