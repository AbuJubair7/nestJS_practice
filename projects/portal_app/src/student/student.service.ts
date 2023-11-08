import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  private name: string;
  private id: string;
  private cgpa: string;
  setName(name: string) {
    this.name = name;
  }
  setId(id: string) {
    this.id = id;
  }
  setCgpa(cgpa: string) {
    this.cgpa = cgpa;
  }
  getName(): string {
    return this.name;
  }
  getId(): string {
    return this.id;
  }
  getCgpa(): string {
    return this.cgpa;
  }
}
