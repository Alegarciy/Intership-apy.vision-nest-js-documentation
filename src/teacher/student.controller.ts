import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getTeacherStudents() {
    return 'Get teacher students';
  }

  @Put('/:studentId')
  updateStudentTeacher() {
    return 'Update Student Teacher';
  }
}
