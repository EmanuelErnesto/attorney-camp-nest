import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateAttorneyRecipe {
  @IsString()
  @IsNotEmpty()
  @Length(3, 240)
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 100)
  password: string;

  @IsNotEmpty()
  @IsString()
  @Matches('^\d{1,5}/[A-Z]{2}$')
  oabCode: string;
}
