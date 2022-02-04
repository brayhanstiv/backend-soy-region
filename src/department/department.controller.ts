import { CreateDepartmentDto } from './dto/create-department.dto';
import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  Body,
  HttpStatus,
  Res,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Controller('/department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  async create(@Res() res, @Body() createdDepartmentDto: CreateDepartmentDto) {
    const data = await this.departmentService.create(createdDepartmentDto);
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      message: 'Department Created Successfully',
      payload: data,
    });
  }

  @Get()
  async findAll(
    @Res() res,
    @Query('from') from = 0,
    @Query('limit') limit = 10,
  ) {
    const data = await this.departmentService.findAll(from, limit);
    const total = await this.departmentService.total();
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      payload: data,
      total: total,
    });
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const data = await this.departmentService.findOne(id);
    if (!data) {
      throw new NotFoundException('Department Not Found');
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      payload: data,
    });
  }

  @Patch(':id')
  async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ) {
    const data = await this.departmentService.update(id, updateDepartmentDto);
    if (!data) {
      throw new NotFoundException('Department Not Found');
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Department Updated Successfully',
      payload: data,
    });
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const data = await this.departmentService.remove(id);
    if (!data) {
      throw new NotFoundException('Department Not Found');
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Department Deleted Successfully',
      payload: data,
    });
  }
}
