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
import {
  CreateBiSemaineDto,
  EditBiSemaineDto,
} from './dto';
import { BiSemaineService } from './biSemaine.service';
import {
  ApiAcceptedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Bi-semaine')
@UseGuards(JwtGuard)
@Controller('bisemaine')
export class BiSemaineController {
  constructor(
    private biSemaineService: BiSemaineService,
  ) {}
  @Get(':id')
  getBiSemaineById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe)
    biSemaineId: number,
  ) {
    return this.biSemaineService.getBiSemaineById(
      userId,
      biSemaineId,
    );
  }
  @Post()
  createBisemaine(
    @GetUser('id') userId: string,
    @Body()
    dto: CreateBiSemaineDto,
  ) {
    return this.biSemaineService.createBiSemaine(
      userId,
      dto,
    );
  }

  @Patch(':id')
  editBiSemaineById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe) biSemaineId: number,
    @Body() dto: EditBiSemaineDto,
  ) {
    return this.biSemaineService.editBiSemaine(
      userId,
      biSemaineId,
      dto,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteBiSemaine(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe) biSemaineId: number,
  ) {
    return this.biSemaineService.deleteBiSemaine(
      userId,
      biSemaineId,
    );
  }
}
