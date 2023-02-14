import { Module } from '@nestjs/common';
import { infractionsController } from './infractions.controller'
import { InfractionsService } from './infractions.service'

@Module({
  providers:[InfractionsService],
  controllers:[infractionsController]
})
export class InfractionsModule {}
