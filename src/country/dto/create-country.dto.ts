// Packages
import { IsString, IsBoolean, IsNotEmpty, MinLength, Matches } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  readonly name: string;

  @Matches(/^[A-Za-z]{2}$/)
  @IsNotEmpty()
  readonly alpha2Code: string;

  @Matches(/^[A-Za-z]{3}$/)
  @IsNotEmpty()
  readonly alpha3Code: string;

  @IsBoolean()
  readonly status: boolean;
}
