import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { CreatePermissionDto } from './dto/create-permission.dot';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';

@Controller('permission')
export class PermissionController {
  constructor(private permissionService: PermissionService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createPermission(@Body() createPermissionRequest: CreatePermissionDto) {
    return this.permissionService.createPermission(createPermissionRequest);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getPermissions() {
    return this.permissionService.getAllPermissions();
  }
}
