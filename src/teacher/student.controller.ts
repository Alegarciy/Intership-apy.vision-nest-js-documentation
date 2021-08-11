import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import {
  FindStudentsResponseDto,
  StudentsResponseDto,
} from 'src/student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getTeacherStudents(
    @Param('teacherId') teacherId: string,
  ): FindStudentsResponseDto[] {
    return `Get teacher students of ${teacherId}`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
    @Body() body,
  ): StudentsResponseDto {
    return `Update Student Teacher With Id of ${teacherId} of Student with Id ${studentId} with ${JSON.stringify(
      body,
    )}`;
  }
}
