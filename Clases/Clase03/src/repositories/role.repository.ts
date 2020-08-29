import { RoleDocument } from '../interfaces';
import { Role } from '../models';

export default class {
  async getAll(): Promise<RoleDocument[]> {
    const roles: RoleDocument[] = await Role.find()
    return roles
  }

  async getById(id: string): Promise<RoleDocument> {
    const role: RoleDocument = await Role.findById(id)
    return role
  }

  async insert(role: RoleDocument): Promise<RoleDocument> {
    const roleInserted: RoleDocument = 
  }

  async update(id: string, role: RoleDocument): Promise<RoleDocument> {}

  async delete(id: string): Promise<RoleDocument> {}
}
