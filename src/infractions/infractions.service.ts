import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import {
  createInfractionsDto,
  EditInfractionsDto,
} from './dto';
@Injectable()
export class InfractionsService {
  constructor(private prisma: PrismaService) {}

  getInfractionsById(
    utilisateur_id: string,
    id_infraction: number,
  ) {
    return this.prisma.infractions.findFirst({
      where: {
        id_infractions: id_infraction,
        utilisateur_id,
      },
    });
  }
async createInfractions(
    utilisateur_id: string,
    dto: createInfractionsDto,
  ) {
    const infractions = await this.prisma.infractions.create({
      data: {
        utilisateur_id,
        ...dto,
      },
    });

    return infractions;
  }
  async editInfractions(
    userId: string,
    id_infractions: number,
    dto: EditInfractionsDto,
  ) {
    // get the infractions by id
    const infractions =
      await this.prisma.infractions.findUnique({
        where: {
          id_infractions: id_infractions,
        },
      });

    // check if user owns the infractions
    if (!infractions || infractions.utilisateur_id !== userId)
      throw new ForbiddenException(
        'Access to resources denied',
      );

    return this.prisma.infractions.update({
      where: {
        id_infractions: id_infractions,
      },
      data: {
        ...dto,
      },
    });
  }
  async deleteInfractions(
    userId: string,
    id_infractions: number,
  ) {
    const infractions =
      await this.prisma.infractions.findUnique({
        where: {
          id_infractions: id_infractions,
        },
      });

    // check if user owns the infractions
    if (!infractions || infractions.utilisateur_id !== userId)
      throw new ForbiddenException(
        'Access to resources denied',
      );

    await this.prisma.infractions.delete({
      where: {
        id_infractions: id_infractions,
      },
    });
  }
}




