import {
  IsDate,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger'
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({type:String,description:'email'})
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
  
  @IsOptional()
  @IsDateString()
  createdAt?: Date;

  @IsOptional()
  @IsDateString()
  updatedAt?: Date;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;
}
