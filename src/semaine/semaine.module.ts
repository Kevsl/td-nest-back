import { Module } from '@nestjs/common';
import { SemaineController } from './semaine.controller'
import { SemaineService } from './semaine.service'

@Module({
  providers:[SemaineService],
  controllers:[SemaineController]
})
export class SemaineModule {}
