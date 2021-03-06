import { RoleRepository } from '../repositories';
import { Request, Response } from 'express';
import { RoleDocument } from '../interfaces';
import { mappingRoleGeneralDto } from '../dto';
import { Responses } from '../utils';

export default class {
  private roleRepository: RoleRepository;

  constructor(roleRepository: RoleRepository) {
    this.roleRepository = roleRepository;
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(req: Request, res: Response) {
    const roles: RoleDocument[] = await this.roleRepository.getAll();

    if (roles && roles.length) {
      return Responses.sentOk(res, mappingRoleGeneralDto(roles));
    }

    Responses.sentNotFound(res);
  }

  async getById(req: Request, res: Response) {
    const role: RoleDocument = await this.roleRepository.getById(req.params.id);
    Responses.sentOk(res, mappingRoleGeneralDto(role));
  }

  async insert(req: Request, res: Response) {
    const role = req.body;
    const roleInserted: RoleDocument = await this.roleRepository.insert(role);
    Responses.sentOk(res, mappingRoleGeneralDto(roleInserted));
  }

  async update(req: Request, res: Response) {
    const role = req.body;
    const id = req.params.id;
    const roleUpdated: RoleDocument = await this.roleRepository.update(
      id,
      role
    );
    Responses.sentOk(res, mappingRoleGeneralDto(roleUpdated));
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;
    const roleDeleted: RoleDocument = await this.roleRepository.delete(id);
    Responses.sentOk(res, mappingRoleGeneralDto(roleDeleted));
  }
}
