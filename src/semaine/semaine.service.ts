import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'
import { createSemaineDto, EditSemaineDto } from './dto'

@Injectable()
export class SemaineService {
  constructor(private prisma: PrismaService) {}

  getSemaineById(
    utilisateur_id: string,
    id_semaine: number,
  ) {
    return this.prisma.semaine.findFirst({
      where: {
        id_semaine: id_semaine,
        utilisateur_id,
      },
    });
  }

  async createSemaine(
    utilisateur_id: string,
    dto: createSemaineDto,
  ) {
    const semaine =
      await this.prisma.semaine.create({
        data: {
          utilisateur_id,
          ...dto,
        },
      });

    return semaine;
  }

  async editSemaineById(
    userId: string,
    id_semaine: number,
    dto: EditSemaineDto,
  ) {
    // get the semaine by id
    const semaine =
      await this.prisma.semaine.findUnique({
        where: {
          id_semaine: id_semaine,
        },
      });

    // check if user owns the semaine
    if (
      !semaine ||
      semaine.utilisateur_id !== userId
    )
      throw new ForbiddenException(
        'Access to resources denied',
      );

    return this.prisma.semaine.update({
      where: {
        id_semaine: id_semaine,
      },
      data: {
        ...dto,
      },
    });
  }
  async deleteSemaineById(
    userId: string,
    id_semaine: number,
  ) {
    const semaine =
      await this.prisma.semaine.findUnique({
        where: {
          id_semaine: id_semaine,
        },
      });

    // check if user owns the semaine
    if (
      !semaine ||
      semaine.utilisateur_id !== userId
    )
      throw new ForbiddenException(
        'Access to resources denied',
      );

    await this.prisma.semaine.delete({
      where: {
        id_semaine: id_semaine,
      },
    });
  }
}