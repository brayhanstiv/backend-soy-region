import { Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  create() {
    return this.newsService.create();
  }

  @Get()
  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.newsService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsService.remove(+id);
  }
}
