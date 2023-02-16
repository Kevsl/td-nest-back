import {
  IsString,
  IsDateString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class EditMeetingDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  contact: string;

  @IsDateString()
  @IsNotEmpty()
  start: string;

  @IsDateString()
  @IsOptional()
  end: Date;

  @IsNotEmpty()
  @IsString()
  utilisateur_id: string;
}
