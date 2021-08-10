import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';
import { StudentTeacherController } from 'src/teacher/student.controller';
import { TeacherController } from 'src/teacher/teacher.controller';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController, StudentTeacherController],
})
export class AppModule {}
