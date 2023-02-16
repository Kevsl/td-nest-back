import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateMeetingDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  contact: string;

  @IsDateString()
  @IsNotEmpty()
  start: Date;

  @IsDateString()
  @IsOptional()
  end: Date;

  @IsNotEmpty()
  @IsString()
  utilisateur_id: string;
}
