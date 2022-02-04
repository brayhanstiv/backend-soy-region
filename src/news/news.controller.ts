import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
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
import { NewsService } from './news.service';

@Controller('/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  async create(@Res() res, @Body() createdNewsDto: CreateNewsDto) {
    const data = await this.newsService.create(createdNewsDto);
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      message: 'New Created successfully',
      payload: data,
    });
  }

  @Get()
  async findAll(
    @Res() res,
    @Query('from') from = 0,
    @Query('limit') limit = 10,
  ) {
    const data = await this.newsService.findAll(from, limit);
    const total = await this.newsService.total();
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      payload: data,
      total: total,
    });
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const data = await this.newsService.findOne(id);
    if (!data) {
      throw new NotFoundException('New Not Found');
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
    @Body() updateNewsDto: UpdateNewsDto,
  ) {
    const data = await this.newsService.update(id, updateNewsDto);
    if (!data) {
      throw new NotFoundException('New Not Found');
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'New updated successfully',
      payload: data,
    });
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const data = await this.newsService.remove(id);
    if (!data) {
      throw new NotFoundException('News Not Found');
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'New deleted successfully',
      payload: data,
    });
  }
}
