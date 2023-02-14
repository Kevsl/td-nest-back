import { Module } from '@nestjs/common';
import { ChronomodeController } from './chronomode.controller'
import { ChronomodeService } from './chronomode.service'

@Module({
  providers:[ChronomodeService],
  controllers:[ChronomodeController]
})
export class ChronomodeModule {}
