import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Patch,
  Res,
  Body,
  HttpStatus,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Res() res, @Body() createdCategoryDto: CreateCategoryDto) {
    const data = await this.categoryService.create(createdCategoryDto);
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      message: 'Category Created successfully',
      payload: data,
    });
  }

  @Get()
  async findAll(
    @Res() res,
    @Query('from') from = 0,
    @Query('limit') limit = 10,
  ) {
    const data = await this.categoryService.findAll(from, limit);
    const total = await this.categoryService.total();
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      payload: data,
      total: total,
    });
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const data = await this.categoryService.findOne(id);
    if (!data) {
      throw new NotFoundException('Category Not Found');
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
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    const data = await this.categoryService.update(id, updateCategoryDto);
    if (!data) {
      throw new NotFoundException('Category Not Found');
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Category updated successfully',
      payload: data,
    });
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const data = await this.categoryService.remove(id);
    if (!data) {
      throw new NotFoundException('Category Not Found');
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Category deleted successfully',
      payload: data,
    });
  }
}
