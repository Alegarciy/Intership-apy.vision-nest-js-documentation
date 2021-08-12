import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import {
  FindStudentsResponseDto,
  StudentsResponseDto,
} from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getTeacherStudents(
    @Param('teacherId') teacherId: string,
  ): FindStudentsResponseDto[] {
    return this.studentService.getStudentsByTeacher(teacherId);
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
    @Body() body,
  ): StudentsResponseDto {
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}
