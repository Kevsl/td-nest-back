import { Module } from '@nestjs/common';
import { BiSemaineController } from './biSemaine.controller'
import { BiSemaineService } from './biSemaine.service'

@Module({
  providers:[BiSemaineService],
  controllers:[BiSemaineController]
})
export class BiSemaineModule {}
