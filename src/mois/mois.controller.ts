import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { createMoisDto, EditMoisDto } from './dto'
import { MoisService } from './mois.service'
import {
  ApiAcceptedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Mois')
@UseGuards(JwtGuard)
@Controller('mois')
export class moisController {
  constructor(private moisService: MoisService) {}

  @Get(':id')
  getMoisById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe) moisId: number,
  ) {
    return this.moisService.getMoisById(
      userId,
      moisId,
    );
  }

  @Post()
  createMois(
    @GetUser('id') userId: string,
    @Body()
    dto: createMoisDto,
  ) {
    return this.moisService.createMois(
      userId,
      dto,
    );
  }

  @Patch(':id')
  editMoisById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe) moisId: number,
    @Body() dto: EditMoisDto,
  ) {
    return this.moisService.editMois(
      userId,
      moisId,
      dto,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteMoisById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe) moisId: number,
  ) {
    return this.moisService.deleteMois(
      userId,
      moisId,
    );
  }
}
