export class CreateStudentDto {
  name: string;
  teacher: string;
}

export class UpdateStudentDto {
  name: string;
  teacher: string;
}

// Response Dto

export class FindStudentsResponseDto {
  id: string;
  name: string;
  teacher: string;
}

export class StudentsResponseDto {
  id: string;
  name: string;
  teacher: string;
}
