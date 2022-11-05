import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Response } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  findAll(@Response() response) {
    const courses = this.coursesService.findAll();
    return response.status(200).send(courses);
  }

  @Get(':id')
  // findOne(@Param('id') id: string) {
  findOne(@Param('id') id: string) {
    return `Curso #${id}`;
    // return this.coursesService.findOne(+id);
  }

  @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
  update(@Param('id') id: string, @Body() body) {
    return `Atualizacao do Curso #${id}`;
    // return this.coursesService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  // remove(@Param('id') id: string) {
  remove(@Param('id') id: string) {
    return `Exclusao do Curso #${id}`;
    // return this.coursesService.remove(+id);
  }
}
