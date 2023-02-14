import { Module } from '@nestjs/common';
import { TriSemaineController } from './triSemaine.controller'
import { TriSemaineService } from './triSemaine.service'

@Module({
  providers:[TriSemaineService],
  controllers:[TriSemaineController]
})
export class TriSemaineModule {}
