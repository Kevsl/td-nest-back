import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class createEntrepriseDto {
  @IsNotEmpty()
  @IsString()
  nom_entreprise: string;

}
