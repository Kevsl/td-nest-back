import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { MeetingService } from './meeting.service';
import {
  CreateMeetingDto,
  EditMeetingDto,
} from './dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Meetings')
@Controller('meeting')
export class MeetingController {
  constructor(
    private meetingService: MeetingService,
  ) {}
  @Get(':id')
  getMeetingById(@Param('id') meetingId: string) {
    return this.meetingService.getMeetingById(
      meetingId,
    );
  }

  @Post()
  createMeeting(
    @Body()
    dto: CreateMeetingDto,
  ) {
    return this.meetingService.createMeeting(dto);
  }
  @UseGuards(JwtGuard)
  @Patch(':id')
  editMeetingById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe) meetingId: string,
    @Body() dto: EditMeetingDto,
  ) {
    return this.meetingService.editMeetingById(
      userId,
      meetingId,
      dto,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  DeleteMeetingeById(
    @GetUser('id') userId: string,
    @Param('id', ParseIntPipe) meetingId: string,
  ) {
    return this.meetingService.DeleteMeetingById(
      userId,
      meetingId,
    );
  }
}
