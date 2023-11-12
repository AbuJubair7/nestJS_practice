import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Student)
    private readonly userRepo: Repository<Student>,
  ) {}

  async createStudent(data: AuthDto) {
    console.log(data);

    const user = this.userRepo.create(data);
    return await this.userRepo.save(user);
  }

  async findStudent(email: string) {
    return await this.userRepo.findOne({
      where: { email: email },
    });
  }

  async signin(data: AuthDto) {
    return this.findStudent(data.email);
  }

  async updateStudent(id: number, data: AuthDto) {
    return await this.userRepo.update(id, data);
  }

  async deleteStudent(id: number) {
    return await this.userRepo.delete(id);
  }
}
