// Packages
import { IsString, IsBoolean, IsNotEmpty, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  readonly name: string;

  @IsBoolean()
  readonly status: boolean;
}
