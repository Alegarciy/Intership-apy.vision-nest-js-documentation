import { Controller, Get, Param, Put } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return 'All Teachers';
  }

  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId') studentId: string,
  ): FindTeacherResponseDto {
    return `Get Teacher By Id of ${studentId}`;
  }
}
