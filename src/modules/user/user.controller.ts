import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createUser(@Body() createUserRequest: CreateUserDto) {
    return this.userService.createUser(createUserRequest);
  }
}
