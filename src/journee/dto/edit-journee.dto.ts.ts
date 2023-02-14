import { Transform } from 'class-transformer'
import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class EditJourneeDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  conduite_journee?: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  service_journee?: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  repos_journee?: number;

  @IsDateString()
  @IsOptional()
  debut_journee?: Date;

  @IsDateString()
  @IsOptional()
  fin_journee?: Date;

  @IsString()
  @IsOptional()
  utilisateur_id: string;
}
