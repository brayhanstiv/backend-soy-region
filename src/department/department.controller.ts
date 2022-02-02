import { Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentService } from './department.service';

@Controller('/department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  create() {
    return this.departmentService.create();
  }

  @Get()
  findAll() {
    return this.departmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.departmentService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentService.remove(+id);
  }
}
