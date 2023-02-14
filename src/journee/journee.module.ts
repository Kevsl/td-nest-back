import { Module } from '@nestjs/common';
import { journeeController } from './journee.controller'
import { JourneeService } from './journee.service'

@Module({
  providers:[JourneeService],
  controllers:[journeeController]
})
export class JourneeModule {}
