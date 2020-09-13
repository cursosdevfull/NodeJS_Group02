import { RoleRepository } from '../repositories';
import { Request, Response } from 'express';
import { RoleDocument } from '../interfaces';
import { mappingRoleGeneralDto } from '../dto';
import { Responses } from '../utils';
import { Controller, Delete, Get, Post, Put } from '../decorators';
import { AuthenticationGuard, AuthorizationGuard } from '../guards';

@Controller('/roles', [
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMINISTRATOR'),
])
export default class {
  private roleRepository: RoleRepository;

  constructor(roleRepository: RoleRepository) {
    this.roleRepository = roleRepository;
  }

  @Get('/')
  async getAll(req: Request, res: Response) {
    const roles: RoleDocument[] = await this.roleRepository.getAll();

    if (roles && roles.length) {
      return Responses.sentOk(res, mappingRoleGeneralDto(roles));
    }

    Responses.sentNotFound(res);
  }

  @Get('/:id')
  async getById(req: Request, res: Response): Promise<any> {
    const role: RoleDocument = await this.roleRepository.getById(req.params.id);
    Responses.sentOk(res, mappingRoleGeneralDto(role));
  }

  @Post('/')
  async insert(req: Request, res: Response) {
    const role = req.body;
    const roleInserted: RoleDocument = await this.roleRepository.insert(role);
    Responses.sentOk(res, mappingRoleGeneralDto(roleInserted));
  }

  @Put('/:id')
  async update(req: Request, res: Response) {
    const role = req.body;
    const id = req.params.id;
    const roleUpdated: RoleDocument = await this.roleRepository.update(
      id,
      role
    );
    Responses.sentOk(res, mappingRoleGeneralDto(roleUpdated));
  }

  @Delete('/:id')
  async delete(req: Request, res: Response) {
    const id = req.params.id;
    const roleDeleted: RoleDocument = await this.roleRepository.delete(id);
    Responses.sentOk(res, mappingRoleGeneralDto(roleDeleted));
  }
}
