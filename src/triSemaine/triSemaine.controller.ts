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
  CreateTriSemaineDto,
  EditTriSemaineDto,
} from './dto';
import { TriSemaineService } from './triSemaine.service';
import {
  ApiAcceptedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Tri-semaine')
@UseGuards(JwtGuard)
@Controller('trisemaine')
export class TriSemaineController {
  constructor(
    private triSemaineService: TriSemaineService,
  ) {}
  @Get(':id')
  getTriSemaineById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe)
    triSemaineId: number,
  ) {
    return this.triSemaineService.getTriSemaineById(
      userId,
      triSemaineId,
    );
  }
  @Post()
  createTrisemaine(
    @GetUser('id') userId: string,
    @Body()
    dto: CreateTriSemaineDto,
  ) {
    return this.triSemaineService.createTriSemaine(
      userId,
      dto,
    );
  }
  @Patch(':id')
  editTriSemaineById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe)
    triSemaineId: number,
    @Body() dto: EditTriSemaineDto,
  ) {
    return this.triSemaineService.editTriSemaine(
      userId,
      triSemaineId,
      dto,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteTriSemaine(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe)
    triSemaineId: number,
  ) {
    return this.triSemaineService.deleteTriSemaine(
      userId,
      triSemaineId,
    );
  }
}
