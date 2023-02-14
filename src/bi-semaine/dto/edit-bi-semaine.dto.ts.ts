import { Transform } from 'class-transformer'
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class EditBiSemaineDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  conduite_bi_semaine: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  service_bi_semaine: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  repos_bi_semaine: number;

  @IsDateString()
  @IsOptional()
  debut_bi_semaine: Date;

  @IsNotEmpty()
  @IsString()
  utilisateur_id: string;
}
