import { Injectable } from '@nestjs/common';
import { students } from '../db';
import {
  CreateStudentDto,
  FindStudentsResponseDto,
  StudentsResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';

import { v4 as uuid } from 'uuid';
import { FindTeacherResponseDto } from 'src/teacher/dto/teacher.dto';

@Injectable()
export class StudentService {
  private students = students;

  getStudents(): FindStudentsResponseDto[] {
    return this.students;
  }

  getStudentId(studentId: string) {
    return this.students.find((student) => {
      return student.id === studentId;
    });
  }

  createStudent(payload: CreateStudentDto): StudentsResponseDto {
    let newStudent = {
      id: uuid(),
      ...payload,
    };

    this.students.push(newStudent);

    return newStudent;
  }

  updateStudent(payload: UpdateStudentDto, studentId: string) {
    let updatedStudent: StudentsResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          id: student.id,
          ...payload,
        };
      } else return student;
    });

    this.students = updatedStudentList;
    return updatedStudent;
  }

  getStudentsByTeacher(teacherId: string): FindStudentsResponseDto[] {
    return this.students.filter((student) => {
      return student.teacher === teacherId;
    });
  }

  updateStudentTeacher(
    teacherId: string,
    studentId: string,
  ): StudentsResponseDto {
    let updatedStudent: StudentsResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          ...student,
          teacher: teacherId,
        };
      } else return student;
    });

    this.students = updatedStudentList;
    return updatedStudent;
  }
}
