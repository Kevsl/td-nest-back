import { Module } from '@nestjs/common';
import { entrepriseController } from './entreprise.controller'
import { EntrepriseService } from './entreprise.service'

@Module({
  providers:[EntrepriseService],
  controllers:[entrepriseController]
})
export class EntrepriseModule {}
