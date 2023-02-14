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
import { JourneeService } from './journee.service';
import {
  createJourneeDto,EditJourneeDto
} from './dto';
import {
  ApiAcceptedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';


@ApiTags('Journee')
@UseGuards(JwtGuard)
@Controller('day')
export class journeeController {
  constructor(
    private journeeService: JourneeService,
  ) {}
  @Get(':id')
  getJourneeById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe) journeeId: number,
  ) {
    return this.journeeService.getJourneeById(
      userId,
      journeeId,
    );
  }

  @Post()
  createJournee(
    @GetUser('id') userId: string,
    @Body()
    dto: createJourneeDto,
    
  ) {
    return this.journeeService.createJournee(
      userId,
      dto,
    );
  }

  @Patch(':id')
  editJourneeById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe) journeeId: number,
    @Body() dto: EditJourneeDto,
  ) {
    return this.journeeService.editJourneeById(
      userId,
      journeeId,
      dto,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteJourneeById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe) journeeId: number,
  ) {
    return this.journeeService.deleteJourneeById(
      userId,
      journeeId,
    );
  }
}
