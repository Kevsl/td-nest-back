import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import {
  createEntrepriseDto,
  EditEntrepriseDto,
} from './dto';
@Injectable()
export class EntrepriseService {
  constructor(private prisma: PrismaService) {}

  getEntrepriseById(
    utilisateur_id: string,
    id_infraction: number,
  ) {
    return this.prisma.entreprise.findFirst({
      where: {
        id_entreprise: id_infraction,
        utilisateur_id,
      },
    });
  }
async createEntreprise(
    utilisateur_id: string,
    dto: createEntrepriseDto,
  ) {
    const entreprise = await this.prisma.entreprise.create({
      data: {
        utilisateur_id,
        ...dto,
      },
    });

    return entreprise;
  }
  async editEntreprise(
    userId: string,
    id_entreprise: number,
    dto: EditEntrepriseDto,
  ) {
    // get the entreprise by id
    const entreprise =
      await this.prisma.entreprise.findUnique({
        where: {
          id_entreprise: id_entreprise,
        },
      });

    // check if user owns the entreprise
    if (!entreprise || entreprise.utilisateur_id !== userId)
      throw new ForbiddenException(
        'Access to resources denied',
      );

    return this.prisma.entreprise.update({
      where: {
        id_entreprise: id_entreprise,
      },
      data: {
        ...dto,
      },
    });
  }
  async deleteEntreprise(
    userId: string,
    id_entreprise: number,
  ) {
    const entreprise =
      await this.prisma.entreprise.findUnique({
        where: {
          id_entreprise: id_entreprise,
        },
      });

    // check if user owns the entreprise
    if (!entreprise || entreprise.utilisateur_id !== userId)
      throw new ForbiddenException(
        'Access to resources denied',
      );

    await this.prisma.entreprise.delete({
      where: {
        id_entreprise: id_entreprise,
      },
    });
  }
}


