import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateChronomodeDto, EditChronomodeDto } from './dto';

@Injectable()
export class ChronomodeService {
  constructor(private prisma: PrismaService) {}

  getChronomodeById(
    utilisateur_id: string,
    chronomodeId: number,
  ) {
    return this.prisma.chronomode.findFirst({
      where: {
        id_chronomode: chronomodeId,
        utilisateur_id,
      },
    });
  }
  async createChronomode(
    utilisateur_id: string,
    dto: CreateChronomodeDto,
  ) {
    const chronomode =
      await this.prisma.chronomode.create({
        data: {
          utilisateur_id,
          ...dto,
        },
      });

    return chronomode;
  }

  async deleteChronomodeById(
    utilisateur_id: string,
    id_chronomode: number,
  ) {
    const chronomode =
      await this.prisma.chronomode.findUnique({
        where: {
          id_chronomode: id_chronomode,
        },
      });

    // check if user owns the chronomode
    if (
      !chronomode ||
      chronomode.utilisateur_id !== utilisateur_id
    )
      throw new ForbiddenException(
        'Access to resources denied',
      );

    await this.prisma.chronomode.delete({
      where: {
        id_chronomode: id_chronomode,
      },
    });
  }
  async editChronomodeById(
    userId: string,
    chronomodeId: number,
    dto: EditChronomodeDto,
  ) {
    // get the chronomode by id
    const chronomode =
      await this.prisma.chronomode.findUnique({
        where: {
          id_chronomode: chronomodeId,
        },
  
      });

    // check if user owns the chronomode
    // if (!chronomode || chronomode.utilisateur_id !== userId)
    //   throw new ForbiddenException(
    //     'Access to resources denied',
    //   );

    return this.prisma.chronomode.update({
      where: {
        id_chronomode: chronomodeId,
      },
      data: {
        ...dto,
      },
    });
  }
}
