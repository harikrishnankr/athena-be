// auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'a8PTd9AFZuJ41NL06WA0',
      signOptions: { expiresIn: '60m' },
    }),
    UserModule,
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
