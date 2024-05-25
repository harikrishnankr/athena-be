import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Permission } from 'src/modules/user/entity/permission.entity';
import { User } from 'src/modules/user/entity/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'user',
  password: 'user@123',
  database: 'athenadb',
  entities: [User, Permission],
  synchronize: true,
  logging: true,
};
