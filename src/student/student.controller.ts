import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentsResponseDto,
  StudentsResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';

@Controller('/students')
export class StudentController {
  @Get()
  getStudents(): FindStudentsResponseDto[] {
    return 'All Students';
  }

  @Get('/:studentId')
  getStudentById(
    @Param('studentId') studentId: string,
  ): FindStudentsResponseDto {
    return `Get Student By Id of ${studentId}`;
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto) {
    return `Create Student With The Following Data ${JSON.stringify(body)}`;
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentsResponseDto {
    return `Update Student With Id of ${studentId} with ${JSON.stringify(
      body,
    )}`;
  }
}
