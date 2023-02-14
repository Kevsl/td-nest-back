import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  EditJourneeDto,
  createJourneeDto,
} from './dto';
@Injectable()
export class JourneeService {
  constructor(private prisma: PrismaService) {}

  getJournees(utilisateur_id: string) {
    return this.prisma.journee.findMany({
      where: {
        utilisateur_id,
      },
    });
  }
  getJourneeById(
    utilisateur_id: string,
    id_journee: number,
  ) {
    return this.prisma.journee.findFirst({
      where: {
        id_journee: id_journee,
        utilisateur_id,
      },
    });
  }

  async createJournee(
    utilisateur_id: string,
    dto: createJourneeDto,
  ) {
    const journee =
      await this.prisma.journee.create({
        data: {
          // ...dto,
          utilisateur_id,
          ...dto,
          
        },
      });

    return journee;
  }
  async editJourneeById(
    userId: string,
    id_journee: number,
    dto: EditJourneeDto,
  ) {
    // get the journee by id
    const journee =
      await this.prisma.journee.findUnique({
        where: {
          id_journee: id_journee,
        },
      });

    // check if user owns the journee
    if (
      !journee ||
      journee.utilisateur_id !== userId
    )
      throw new ForbiddenException(
        'Access to resources denied',
      );

    return this.prisma.journee.update({
      where: {
        id_journee: id_journee,
      },
      data: {
        ...dto,
      },
    });
  }
  async deleteJourneeById(
    userId: string,
    id_journee: number,
  ) {
    const journee =
      await this.prisma.journee.findUnique({
        where: {
          id_journee: id_journee,
        },
      });

    // check if user owns the journee
    if (!journee || journee.utilisateur_id !== userId)
      throw new ForbiddenException(
        'Access to resources denied',
      );

    await this.prisma.journee.delete({
      where: {
        id_journee: id_journee,
      },
    });
  }
}