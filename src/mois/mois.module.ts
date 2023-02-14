import { Module } from '@nestjs/common';
import { moisController } from './mois.controller'
import { MoisService } from './mois.service'

@Module({
  providers:[MoisService],
  controllers:[moisController]
})
export class MoisModule {}
