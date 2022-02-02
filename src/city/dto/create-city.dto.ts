// Packages
import { IsString, IsBoolean, IsNotEmpty, MinLength } from 'class-validator';

export class CreateCityDto {
  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  readonly department: string;

  @IsBoolean()
  readonly status: boolean;
}
