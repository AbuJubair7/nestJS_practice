import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entities/student.entity';
import { Repository } from 'typeorm';
import { StudentDto } from './dto/student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepo: Repository<Student>,
  ) {}

  async getAllStudent() {
    return await this.studentRepo.find();
  }

  async getStudent(id: number) {
    const student = await this.studentRepo.findOne({ where: { id: id } });
    if (student) return student;
    throw new NotFoundException('No student found with id: ' + id);
  }

  async updateStudent(id: number, data: StudentDto) {
    return await this.studentRepo.update(id, data);
  }

  async deleteStudent(id: number) {
    return await this.studentRepo.delete(id);
  }
}
