import {
  IsDateString,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class EditInfractionsDto {
  @IsString()
  nom_infractions: string;

  @IsDateString()
  date_infractions: Date;

  @IsNotEmpty()
  @IsString()
  utilisateur_id: string;
}
