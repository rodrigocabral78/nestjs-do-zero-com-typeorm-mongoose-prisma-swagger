import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do framework NestJS',
      description: 'Fundamentos do framework NestJS',
      tags: ['node.js', 'nestjs', 'javascript'],
    },
  ];

  // create(createCourseDto: CreateCourseDto) {
  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
    // return 'This action adds a new course';
  }

  findAll() {
    return this.courses;
    // return `This action returns all courses`;
  }

  // findOne(id: number) {
  findOne(id: string) {
    const course = this.courses.find((course) => course.id === Number(id));

    if (!course) {
      throw new HttpException(
        `Course ID ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return course;
    // return `This action returns a #${id} course`;
  }

  // update(id: number, updateCourseDto: UpdateCourseDto) {
  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    this.courses[indexCourse] = updateCourseDto;
    // return `This action updates a #${id} course`;
  }

  // remove(id: number) {
  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
    // return `This action removes a #${id} course`;
  }
}
