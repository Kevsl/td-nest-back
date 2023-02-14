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
import { createSemaineDto, EditSemaineDto } from './dto'
import { SemaineService } from './semaine.service';
import {
  ApiAcceptedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Semaine')
@UseGuards(JwtGuard)
@Controller('semaine')
export class SemaineController {
  constructor(
    private semaineService: SemaineService,
  ) {}
  @Get(':id')
  getSemaineById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe) semaineId: number,
  ) {
    return this.semaineService.getSemaineById(
      userId,
      semaineId,
    );
  }

  @Post()
  createSemaine(
    @GetUser('id') userId: string,
    @Body()
    dto: createSemaineDto,
  ) {
    return this.semaineService.createSemaine(
      userId,
      dto,
    );
  }

  @Patch(':id')
  editSemaineById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe) semaineId: number,
    @Body() dto: EditSemaineDto,
  ) {
    return this.semaineService.editSemaineById(
      userId,
      semaineId,
      dto,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteSemaineById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe) semaineId: number,
  ) {
    return this.semaineService.deleteSemaineById(
      userId,
      semaineId,
    );
  }
}

