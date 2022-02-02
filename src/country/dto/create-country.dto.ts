// Packages
import { IsString, IsBoolean, IsNotEmpty, MinLength } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  readonly name: string;

  @MinLength(2)
  @IsNotEmpty()
  readonly code: string;

  @IsBoolean()
  readonly status: boolean;
}
