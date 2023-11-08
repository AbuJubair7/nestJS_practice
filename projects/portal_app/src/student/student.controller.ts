import { Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';
// get, put, post, delete
@Controller('student')
export class StudentController {
  constructor(private readonly service: StudentService) {}

  @Get('name')
  studentGetName(): string {
    return this.service.getName();
  }
  @Get('id')
  studentGetId(): string {
    return this.service.getId();
  }
  @Get('cgpa')
  studentGetCgpa(): string {
    return this.service.getCgpa();
  }
  @Post('name')
  studentSetName() {
    this.service.setName('Mimmoni');
  }
  @Post('id')
  studentSetId() {
    this.service.setId('20-42231-1');
  }
  @Post('cgpa')
  studentSetCgpa() {
    this.service.setCgpa('3.75');
  }
}
