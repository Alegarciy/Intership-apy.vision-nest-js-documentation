import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Investors } from 'src/investors/entity/investors.entity';
import { InvestorsModule } from 'src/investors/investors.module';
import { config } from 'src/orm.config';
import { StudentModule } from 'src/student/student.module';
import { TeacherModule } from 'src/teacher/teacher.module';

@Module({
  imports: [
    // TeacherModule,
    // StudentModule,
    TypeOrmModule.forRoot(config),
    InvestorsModule,
  ],
})
export class AppModule {}
