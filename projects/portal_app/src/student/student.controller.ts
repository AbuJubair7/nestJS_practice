import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from './dto/student.dto';
// get, put, post, delete
@Controller('student')
export class StudentController {
  constructor(private readonly service: StudentService) {}

  @Get(':id')
  getStudent(@Param('id') id: number) {
    return this.service.getStudent(id);
  }

  @Get()
  getAll() {
    return this.service.getAllStudent();
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() data: StudentDto) {
    this.service.updateStudent(id, data);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.service.deleteStudent(id);
  }
}
