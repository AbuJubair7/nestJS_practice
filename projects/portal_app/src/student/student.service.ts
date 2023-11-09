import { Injectable, NotFoundException } from '@nestjs/common';
import { StudentDto } from './student.dto';

@Injectable()
export class StudentService {
  private students = [];

  createStudent(data: StudentDto) {
    this.students.push(data);
  }
  getAllStudent() {
    return this.students;
  }

  findStudent(id: string) {
    const data = this.students.find((st) => {
      return st.id === id;
    });
    console.log(data);
    if (!data) throw new NotFoundException('Student data not available');
    return data;
  }
  // student id - > get info
  // information create new student
  // student id - > delete info
}
