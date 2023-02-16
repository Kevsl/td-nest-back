import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  EditMeetingDto,
  CreateMeetingDto,
} from './dto';
@Injectable()
export class MeetingService {
  constructor(private prisma: PrismaService) {}

  async getMeetings() {
    return this.prisma.meeting.findMany({});
  }

  async getMeetingById(user_id: string) {
    return this.prisma.meeting.findMany({
      where: {
        utilisateur_id: user_id,
      },
    });
  }

  async createMeeting(dto: CreateMeetingDto) {
    const meeting =
      await this.prisma.meeting.create({
        data: {
          // ...dto,
          ...dto,
        },
      });

    return meeting;
  }
  async editMeetingById(
    userId: string,
    id_meeting: string,
    dto: EditMeetingDto,
  ) {
    const meeting =
      await this.prisma.meeting.findUnique({
        where: {
          id_meeting: id_meeting,
        },
      });

    if (
      !meeting ||
      meeting.utilisateur_id !== userId
    )
      throw new ForbiddenException(
        'Access to resources denied',
      );

    return this.prisma.meeting.update({
      where: {
        id_meeting: id_meeting,
      },
      data: {
        ...dto,
      },
    });
  }
  async DeleteMeetingById(
    userId: string,
    id_meeting: string,
  ) {
    const meeting =
      await this.prisma.meeting.findUnique({
        where: {
          id_meeting: id_meeting,
        },
      });

    if (
      !meeting ||
      meeting.utilisateur_id !== userId
    )
      throw new ForbiddenException(
        'Access to resources denied',
      );

    await this.prisma.meeting.delete({
      where: {
        id_meeting: id_meeting,
      },
    });
  }
}
