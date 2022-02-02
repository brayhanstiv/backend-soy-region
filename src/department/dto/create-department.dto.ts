// Packages
import { IsString, IsBoolean, IsNotEmpty, MinLength } from 'class-validator';

export class CreateDepartmentDto {
  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  readonly code: string;

  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  readonly country: string;

  @IsBoolean()
  readonly status: boolean;
}
