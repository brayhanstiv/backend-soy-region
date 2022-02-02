// Packages
import {
  IsString,
  IsBoolean,
  IsNotEmpty,
  MinLength,
  IsDate,
  IsArray,
} from 'class-validator';

export class CreateNewsDto {
  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  readonly title: string;

  @IsDate()
  readonly date: Date;

  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  readonly category: string;

  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  readonly content: string;

  @IsArray()
  readonly images: string[];

  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  readonly video: string;

  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  readonly author: string;

  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  readonly location: string;

  @IsBoolean()
  readonly status: boolean;
}
