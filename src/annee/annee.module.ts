import { Module } from '@nestjs/common';
import { AnneeController } from './annee.controller'
import { AnneeService } from './annee.service'

@Module({
    providers:[AnneeService],
  controllers:[AnneeController]
})
export class AnneeModule{}
