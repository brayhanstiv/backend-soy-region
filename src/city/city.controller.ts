import { Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { CityService } from './city.service';

@Controller('/city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  create() {
    return this.cityService.create();
  }

  @Get()
  findAll() {
    return this.cityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.cityService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cityService.remove(+id);
  }
}
