import { ERROR_MESSAGES, PASSWORD_REGEX } from './../constants';
import {
  IsAlphanumeric,
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5, {
    message: ERROR_MESSAGES.USERNAME_MIN_LENGTH.replace('{minLength}', '5'),
  })
  @IsAlphanumeric('en-US', {
    message: ERROR_MESSAGES.USERNAME_ALPHA_NUMERIC,
  })
  username: string;

  @IsString()
  @MinLength(2, { message: ERROR_MESSAGES.FIRST_NAME_REQUIRED })
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @MinLength(2, { message: ERROR_MESSAGES.LAST_NAME_REQUIRED })
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail({}, { message: ERROR_MESSAGES.VALID_EMAIL })
  email: string;

  @IsString()
  @IsNotEmpty()
  dob: string;

  @IsString()
  @IsNotEmpty()
  @Matches(PASSWORD_REGEX, {
    message: `Password must contain Minimum 8 and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character`,
  })
  password: string;

  @IsArray()
  permissions: string[];
}
