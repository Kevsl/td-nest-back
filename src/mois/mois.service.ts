import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  createMoisDto,
  EditMoisDto,
} from './dto';
@Injectable()
export class MoisService {
  constructor(private prisma: PrismaService) {}

  getMoisById(
    utilisateur_id: string,
    id_mois: number,
  ) {
    return this.prisma.mois.findFirst({
      where: {
        id_mois: id_mois,
        utilisateur_id,
      },
    });
  }

  async createMois(
    utilisateur_id: string,
    dto: createMoisDto,
  ) {
    const mois = await this.prisma.mois.create({
      data: {
        utilisateur_id,
        ...dto,
      },
    });

    return mois;
  }

  async editMois(
    userId: string,
    id_mois: number,
    dto: EditMoisDto,
  ) {
    // get the mois by id
    const mois =
      await this.prisma.mois.findUnique({
        where: {
          id_mois: id_mois,
        },
      });

    // check if user owns the mois
    if (
      !mois ||
      mois.utilisateur_id !== userId
    )
      throw new ForbiddenException(
        'Access to resources denied',
      );

    return this.prisma.mois.update({
      where: {
        id_mois: id_mois,
      },
      data: {
        ...dto,
      },
    });
  }
  async deleteMois(
    userId: string,
    id_mois: number,
  ) {
    const mois =
      await this.prisma.mois.findUnique({
        where: {
          id_mois: id_mois,
        },
      });

    // check if user owns the mois
    if (
      !mois ||
      mois.utilisateur_id !== userId
    )
      throw new ForbiddenException(
        'Access to resources denied',
      );

    await this.prisma.mois.delete({
      where: {
        id_mois: id_mois,
      },
    });
  }
}
