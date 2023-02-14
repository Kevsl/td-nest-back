import { Transform } from 'class-transformer'
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class EditAnneeDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  conduite_annee: number;
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  service_annee: number;

  @IsDateString()
  @IsOptional()
  debut_annee: Date;

  @IsNotEmpty()
  @IsString()
  utilisateur_id: string;
}
