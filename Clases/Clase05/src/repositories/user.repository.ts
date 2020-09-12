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

  async getAll(): Promise<UserDocument[]> {
    const items: UserDocument[] = await User.find().populate('roles');
    return items;
  }

  async getUserByEmail(email: string): Promise<UserDocument> {
    const user: UserDocument = await User.findOne({ email }).populate('roles');
    return user;
  }
}
