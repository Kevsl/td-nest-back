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
import { createInfractionsDto, EditInfractionsDto } from './dto'
import { InfractionsService } from './infractions.service'
import {
  ApiAcceptedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Infractions')
@UseGuards(JwtGuard)
@Controller('infractions')
export class infractionsController {
  constructor(
    private infractionsService: InfractionsService,
  ) {}

  @Get(':id')
  getInfractionsById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe)
    infractionsId: number,
  ) {
    return this.infractionsService.getInfractionsById(
      userId,
      infractionsId,
    );
  }

  @Post()
  createinfractions(
    @GetUser('id') userId: string,
    @Body()
    dto: createInfractionsDto,
  ) {
    return this.infractionsService.createInfractions(
      userId,
      dto,
    );
  }
  @Patch(':id')
  editinfractionsById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe)
    infractionsId: number,
    @Body() dto: EditInfractionsDto,
  ) {
    return this.infractionsService.editInfractions(
      userId,
      infractionsId,
      dto,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteInfractions(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe)
    infractionsId: number,
  ) {
    return this.infractionsService.deleteInfractions(
      userId,
      infractionsId,
    );
  }
}
