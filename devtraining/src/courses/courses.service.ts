import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>
  ) {}

  findAll() {
    // return `This action returns all courses`;
    return this.courseRepository.find();
  }

  // findOne(id: number) {
  async findOne(id: number) {
    // return `This action returns a #${id} course`;
    const course = await this.courseRepository.findOne(id);

    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }
    return course;
}

  create(CreateCourseDto: CreateCourseDto) {
    // return 'This action adds a new course';
    const course = this.courseRepository.create(CreateCourseDto)
    return this.courseRepository.save(course);
  }

  // update(id: number, updateCourseDto: UpdateCourseDto) {
  async update(id: number, updateCourseDto: UpdateCourseDto) {
    // return `This action updates a #${id} course`;
    const course = await this.courseRepository.preload({
      id: id,
      ...updateCourseDto
    });

     if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return this.courseRepository.save(course);
  }

  // remove(id: number) {
  async remove(id: number) {
    // return `This action removes a #${id} course`;
    const course = await this.courseRepository.findOne(id);

    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return this.courseRepository.remove(course);
  }
}
