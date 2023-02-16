import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async editUser(
    userId: string,
    dto: EditUserDto,
  ) {
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...dto,
      },
    });

    delete user.hash;

    return user;
  }

  async getUsers() {
    const users = await this.prisma.user.findMany(
      {
        select: {
          id: true,
          email: true,
          tel: true,
          stat: true,
          firstName: true,
          lastName: true,
        },
      },
    );
    return users;
  }
}
