import { Transform } from 'class-transformer'
import {
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class createInfractionsDto {
  @IsString()
  nom_infractions: string;

  @IsDateString()
  date_infractions: Date;

  @IsNotEmpty()
  @IsString()
  utilisateur_id: string;
}
