import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { ERole } from '../entity/role.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly nama: string;
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  @IsNumber()
  @Min(20)
  @Max(40)
  readonly umur: number;
  @IsString()
  @IsNotEmpty()
  readonly tanggal_lahir: string;
  @IsEnum(ERole)
  readonly role: ERole;
}
