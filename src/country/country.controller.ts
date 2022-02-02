import { Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  create() {
    return this.countryService.create();
  }

  @Get()
  findAll() {
    return this.countryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.countryService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryService.remove(+id);
  }
}
