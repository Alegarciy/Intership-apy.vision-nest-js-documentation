import { Injectable } from '@nestjs/common';
import { teachers } from 'src/db';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
  private teachers = teachers;

  getTeacher(): FindTeacherResponseDto[] {
    return teachers;
  }

  getTeacherById(teacherId: string): FindTeacherResponseDto {
    return this.teachers.find((teacher) => {
      return teacher.id === teacherId;
    });
  }
}
