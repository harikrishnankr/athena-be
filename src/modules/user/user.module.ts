import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Permission } from './entity/permission.entity';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Permission])],
  controllers: [UserController, PermissionController],
  providers: [UserService, PermissionService],
  exports: [UserService],
})
export class UserModule {}
