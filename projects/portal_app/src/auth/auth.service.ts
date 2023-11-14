import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entities/student.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { SigninDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepo: Repository<Student>,
  ) {}

  async createStudent(data: AuthDto) {
    console.log(data);

    const user = await this.studentRepo.create(data);
    return await this.studentRepo.save(user);
  }

  async findStudent(data: SigninDto) {
    const student = await this.studentRepo.findOne({
      where: { email: data.email },
    });
    if (student && (await bcrypt.compare(data.password, student.password)))
      return true;
    return false;
  }

  async signin(data: SigninDto) {
    if (await this.findStudent(data)) {
      return 'Sign in done!';
    }
    throw new UnauthorizedException('Email or password error!');
  }
}
