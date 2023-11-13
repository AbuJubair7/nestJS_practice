import { IsEmail, IsString } from 'class-validator';

export class StudentDto {
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;
}
