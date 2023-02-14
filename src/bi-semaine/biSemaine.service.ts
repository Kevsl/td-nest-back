import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateBiSemaineDto, EditBiSemaineDto } from './dto'

@Injectable()
export class BiSemaineService {
  constructor(private prisma: PrismaService) {}

  
  getBiSemaineById(
    utilisateur_id: string,
    id_biSemaine: number,
  ) {
    return this.prisma.bi_semaine.findFirst({
      where: {
        id_bi_semaine: id_biSemaine,
        utilisateur_id,
      },
    });
  }

  async createBiSemaine(
    utilisateur_id: string,
    dto: CreateBiSemaineDto,
  ) {
    const biSemaine =
      await this.prisma.bi_semaine.create({
        data: {
          utilisateur_id,
          ...dto,
        },
      });

    return biSemaine;
  }
  async editBiSemaine(
    userId: string,
    id_biSemaine: number,
    dto: EditBiSemaineDto,
  ) {
    // get the semaine by id
    const biSemaine =
      await this.prisma.bi_semaine.findUnique({
        where: {
          id_bi_semaine: id_biSemaine,
        },
      });

    // check if user owns the semaine
    if (
      !biSemaine ||
      biSemaine.utilisateur_id !== userId
    )
      throw new ForbiddenException(
        'Access to resources denied',
      );

    return this.prisma.bi_semaine.update({
      where: {
        id_bi_semaine: id_biSemaine,
      },
      data: {
        ...dto,
      },
    });
  }
  async deleteBiSemaine(
    userId: string,
    id_biSemaine: number,
  ) {
    const biSemaine =
      await this.prisma.bi_semaine.findUnique({
        where: {
          id_bi_semaine: id_biSemaine,
        },
      });

    // check if user owns the biSemaine
    if (
      !biSemaine ||
      biSemaine.utilisateur_id !== userId
    )
      throw new ForbiddenException(
        'Access to resources denied',
      );

    await this.prisma.bi_semaine.delete({
      where: {
        id_bi_semaine: id_biSemaine,
      },
    });
  }
}
