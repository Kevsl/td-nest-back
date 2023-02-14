import { Transform } from 'class-transformer'
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class EditTriSemaineDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  repos_a_rattraper: number;

  @IsNotEmpty()
  @IsString()
  utilisateur_id: string;

}
