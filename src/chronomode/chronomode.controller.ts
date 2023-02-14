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
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import {
  ApiAcceptedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateChronomodeDto, EditChronomodeDto } from './dto';
import { ChronomodeService } from './chronomode.service'; 


@ApiTags('Chronomode')
@UseGuards(JwtGuard)
@Controller('chronomode')
export class ChronomodeController {
  constructor(
    private chronomodeService: ChronomodeService,
  ) {}

  @Get(':id')
  getChronomodeById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe)
    chronoModeId: number,
  ) {
    return this.chronomodeService.getChronomodeById(
      userId,
      chronoModeId,
    );
  }
  @Post('create')
  createChronomode(
    @GetUser('id') userId: string,
    @Body() dto: CreateChronomodeDto,
  ) {
    return this.chronomodeService.createChronomode(
      userId,
      dto,
    );
  }

  @Patch(':id')
  editChronomodeById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe) id_chronomode: number,
    @Body() dto: EditChronomodeDto,
  ) {
    return this.chronomodeService.editChronomodeById(
      userId,
      id_chronomode,
      dto,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deletechronomodeById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe) chronomodeId: number,
  ) {
    return this.chronomodeService.deleteChronomodeById(
      userId,
      chronomodeId,
    );
  }
}
