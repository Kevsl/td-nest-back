import { Transform } from 'class-transformer'
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class EditMoisDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  id_mois: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  conduite_mois: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  service_mois: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  repos_mois: number;

  @IsDateString()
  @IsNotEmpty()
  debut_mois: Date;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  infractions_mois: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  decouches_mois: number;

  @IsNotEmpty()
  @IsString()
  utilisateur_id: string;
}
