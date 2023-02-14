import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateTriSemaineDto,
  EditTriSemaineDto,
} from './dto';
@Injectable()
export class TriSemaineService {
  constructor(private prisma: PrismaService) {}

  getTriSemaineById(
    utilisateur_id: string,
    id_triSemaine: number,
  ) {
    return this.prisma.tri_semaine.findFirst({
      where: {
        id_tri_semaine: id_triSemaine,
        utilisateur_id,
      },
    });
  }
  async createTriSemaine(
    utilisateur_id: string,
    dto: CreateTriSemaineDto,
  ) {
    const triSemaine =
      await this.prisma.tri_semaine.create({
        data: {
          utilisateur_id,
          ...dto,
        },
      });

    return triSemaine;
  }

  async editTriSemaine(
    userId: string,
    id_triSemaine: number,
    dto: EditTriSemaineDto,
  ) {
    // get the semaine by id
    const triSemaine =
      await this.prisma.tri_semaine.findUnique({
        where: {
          id_tri_semaine: id_triSemaine,
        },
      });

    // check if user owns the semaine
    if (
      !triSemaine ||
      triSemaine.utilisateur_id !== userId
    )
      throw new ForbiddenException(
        'Access to resources denied',
      );

    return this.prisma.tri_semaine.update({
      where: {
        id_tri_semaine: id_triSemaine,
      },
      data: {
        ...dto,
      },
    });
  }
  async deleteTriSemaine(
    userId: string,
    id_triSemaine: number,
  ) {
    const triSemaine =
      await this.prisma.tri_semaine.findUnique({
        where: {
          id_tri_semaine: id_triSemaine,
        },
      });

    // check if user owns the triSemaine
    if (
      !triSemaine ||
      triSemaine.utilisateur_id !== userId
    )
      throw new ForbiddenException(
        'Access to resources denied',
      );

    await this.prisma.tri_semaine.delete({
      where: {
        id_tri_semaine: id_triSemaine,
      },
    });
  }
}
