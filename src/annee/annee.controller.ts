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
import { AnneeService } from './annee.service'
import { createAnneeDto, EditAnneeDto } from './dto'
import {
  ApiAcceptedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';


@ApiTags('Annee')
@UseGuards(JwtGuard)
@Controller('annee')
export class AnneeController {
  constructor(
    private anneeService: AnneeService,
  ) {}

  @Get(':id')
  getAnneeById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe)
    anneeId: number,
  ) {
    return this.anneeService.getAnneeById(
      userId,
      anneeId,
    );
  }
  @Post()
  createAnnee(
    @GetUser('id') userId: string,
    @Body()
    dto: createAnneeDto,
  ) {
    return this.anneeService.createAnnee(
      userId,
      dto,
    );
  }
  @Patch(':id')
  editAnneeById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe) anneeId: number,
    @Body() dto: EditAnneeDto,
  ) {
    return this.anneeService.editAnnee(
      userId,
      anneeId,
      dto,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteaAnneeById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe) anneeId: number,
  ) {
    return this.anneeService.deleteAnnee(
      userId,
      anneeId,
    );
  }
}
