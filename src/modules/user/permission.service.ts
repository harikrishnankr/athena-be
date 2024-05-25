import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from './entity/permission.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { CreatePermissionDto } from './dto/create-permission.dot';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
  ) {}

  public async createPermission(
    createPermissionRequest: CreatePermissionDto,
  ): Promise<Permission> {
    const permission = new Permission();
    permission.name = createPermissionRequest.name;
    try {
      return this.permissionRepository.save(permission);
    } catch (error) {
      throw new QueryFailedError('query', [], error);
    }
  }

  public async getAllPermissions(): Promise<Permission[]> {
    return this.permissionRepository.find();
  }
}
