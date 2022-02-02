// Packages
import {
  IsString,
  IsBoolean,
  IsNotEmpty,
  MinLength,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  readonly rol: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  readonly user: string;

  @IsBoolean()
  readonly status: boolean;
}
