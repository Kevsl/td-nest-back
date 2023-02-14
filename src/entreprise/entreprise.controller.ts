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
import {ApiAcceptedResponse,ApiResponse, ApiTags } from '@nestjs/swagger'
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import {
  createEntrepriseDto,
  EditEntrepriseDto,
} from './dto';
import { EntrepriseService } from './entreprise.service';


@ApiTags('entreprise')
@UseGuards(JwtGuard)
@Controller('entreprise')
export class entrepriseController {
  constructor(
    private entrepriseService: EntrepriseService,
  ) {}

  @Get(':id')
  getEntrepriseById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe)
    entrepriseId: number,
  ) {
    return this.entrepriseService.getEntrepriseById(
      userId,
      entrepriseId,
    );
  }
  @Post()
  @ApiResponse({
    description:'entreprise registration'
  })
  @ApiAcceptedResponse()
  createEntreprise(
    @GetUser('id') userId: string,
    @Body()
    dto: createEntrepriseDto,
  ) {
    return this.entrepriseService.createEntreprise(
      userId,
      dto,
    );
  }
  @Patch(':id')
  editEntreprise(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe)
    entrepriseId: number,
    @Body() dto: EditEntrepriseDto,
  ) {
    return this.entrepriseService.editEntreprise(
      userId,
      entrepriseId,
      dto,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteEntreprise(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe)
    entrepriseId: number,
  ) {
    return this.entrepriseService.deleteEntreprise(
      userId,
      entrepriseId,
    );
  }
}
