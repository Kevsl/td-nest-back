import {
  IsDateString,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class EditChronomodeDto {
  @IsString()
  @IsNotEmpty()
  nom_chronomode: string;

  @IsDateString()
  @IsNotEmpty()
  date_chronomode: Date;

  @IsNotEmpty()
  @IsString()
  utilisateur_id: string;
}
