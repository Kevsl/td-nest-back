import { Transform } from 'class-transformer'
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class createSemaineDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  conduite_semaine: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  service_semaine: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  repos_semaine: number;

  @IsDateString()
  @IsOptional()
  debut_semaine: Date;

  @IsNotEmpty()
  @IsString()
  utilisateur_id: string;
}
