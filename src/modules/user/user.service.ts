import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { Permission } from './entity/permission.entity';
import * as bcrypt from 'bcryptjs';
import * as moment from 'moment';
import { DATE_FORMAT } from './constants';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }

  public async createUser(createUserRequest: CreateUserDto): Promise<User> {
    const permissionMap = createUserRequest.permissions.map((name) => {
      try {
        return this.permissionRepository.findOne({ where: { name } });
      } catch (error) {
        throw new QueryFailedError('query', [], error);
      }
    });
    const permissions = await Promise.all(permissionMap);
    const user = new User();
    user.username = createUserRequest.username;
    user.firstName = createUserRequest.firstName;
    user.lastName = createUserRequest.lastName;
    user.email = createUserRequest.email;
    user.dob = new Date(
      moment(createUserRequest.dob, DATE_FORMAT).format('MM/DD/YYYY'),
    );
    user.permissions = permissions.filter(
      (permission) => permission !== undefined,
    );
    const hashedPassword = await bcrypt.hash(createUserRequest.password, 10);
    user.password = hashedPassword;
    try {
      return this.userRepository.save(user);
    } catch (error) {
      throw new QueryFailedError('query', [], error);
    }
  }
}
