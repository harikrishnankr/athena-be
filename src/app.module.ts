import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './shared/database/database.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './shared/interceptors/response.interceptor';
import { AllExceptionsFilter } from './shared/filters/exception.filter';
import { DatabaseExceptionFilter } from './shared/filters/database-exception.filter';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_FILTER,
      useClass: DatabaseExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
