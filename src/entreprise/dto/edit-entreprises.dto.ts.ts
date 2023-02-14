import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class EditEntrepriseDto {
  @IsNotEmpty()
  @IsString()
  nom_entreprise: string;
}
