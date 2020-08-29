import { RoleDocument } from '../interfaces';
import { Role } from '../models';
import { GenericRepository } from '.';
import { Model } from 'mongoose';

export default class extends GenericRepository<
  Model<RoleDocument>,
  RoleDocument
> {
  constructor() {
    super(Role);
  }
  /*   async getAll(): Promise<RoleDocument[]> {
    const roles: RoleDocument[] = await Role.find();
    return roles;
  }

  async getById(id: string): Promise<RoleDocument> {
    const role: RoleDocument = await Role.findById(id);
    return role;
  }

  async insert(role: RoleDocument): Promise<RoleDocument> {
    const roleInserted: RoleDocument = await Role.create(role);
    return roleInserted;
  }

  async update(id: string, role: RoleDocument): Promise<RoleDocument> {
    const roleUpdated: RoleDocument = await Role.findByIdAndUpdate(id, role, {
      new: true,
    });
    return roleUpdated;
  }

  async delete(id: string): Promise<RoleDocument> {
    const roleDeleted: RoleDocument = await Role.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );
    return roleDeleted;
  } */
}
