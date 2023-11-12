import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from './student.dto';
// get, put, post, delete
@Controller('student')
export class StudentController {
  constructor(private readonly service: StudentService) {}

  @Post()
  createStudent(@Body() data: StudentDto) {
    this.service.createStudent(data);
  }

  @Get(':id')
  getStudent(@Param('id') id: string) {
    return this.service.findStudent(id);
  }

  @Get()
  getAllStudent() {
    return this.service.getAllStudent();
  }
}
