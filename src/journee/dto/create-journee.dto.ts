import { Transform } from 'class-transformer'
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class createJourneeDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  conduite_journee: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  service_journee: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  repos_journee: number;

  @IsDateString()
  @IsNotEmpty()
  debut_journee: Date;

  @IsDateString()
  @IsOptional()
  fin_journee: Date;

  @IsNotEmpty()
  @IsString()
  utilisateur_id: string;
}
