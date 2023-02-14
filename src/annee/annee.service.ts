import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  createAnneeDto,
  EditAnneeDto,
} from './dto';
@Injectable()
export class AnneeService {
  constructor(private prisma: PrismaService) {}
  getAnneeById(
    utilisateur_id: string,
    id_annee: number,
  ) {
    return this.prisma.annee.findFirst({
      where: {
        id_annee: id_annee,
        utilisateur_id,
      },
    });
  }
  async createAnnee(
    utilisateur_id: string,
    dto: createAnneeDto,
  ) {
    const annee = await this.prisma.annee.create({
      data: {
        utilisateur_id,
        ...dto,
      },
    });

    return annee;
  }
  async editAnnee(
    userId: string,
    id_annee: number,
    dto: EditAnneeDto,
  ) {
    // get the annee by id
    const annee =
      await this.prisma.annee.findUnique({
        where: {
          id_annee: id_annee,
        },
      });

    // check if user owns the annee
    if (!annee || annee.utilisateur_id !== userId)
      throw new ForbiddenException(
        'Access to resources denied',
      );

    return this.prisma.annee.update({
      where: {
        id_annee: id_annee,
      },
      data: {
        ...dto,
      },
    });
  }
  async deleteAnnee(
    userId: string,
    id_annee: number,
  ) {
    const annee =
      await this.prisma.annee.findUnique({
        where: {
          id_annee: id_annee,
        },
      });

    // check if user owns the annee
    if (!annee || annee.utilisateur_id !== userId)
      throw new ForbiddenException(
        'Access to resources denied',
      );

    await this.prisma.annee.delete({
      where: {
        id_annee: id_annee,
      },
    });
  }
}
