import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
import { JwtPayload } from 'src/modules/auth/jwt-payload.interface';
import { User } from '../user/entity/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload: JwtPayload = { username: user.username, userId: user.id };
    const { id, username, firstName, lastName, email, dob } = user;
    return {
      access_token: this.jwtService.sign(payload),
      id,
      username,
      firstName,
      lastName,
      email,
      dob,
    };
  }
}
