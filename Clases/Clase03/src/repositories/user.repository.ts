import { UserDocument } from '../interfaces';
import { User } from '../models';
import { GenericRepository } from '.';
import { Model } from 'mongoose';

export default class extends GenericRepository<
  Model<UserDocument>,
  UserDocument
> {
  constructor() {
    super(User);
  }
}
