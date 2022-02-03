import { UpdateCityDto } from './dto/update-city.dto';
import { CreateCityDto } from './dto/create-city.dto';
import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  Res,
  Body,
  HttpStatus,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { CityService } from './city.service';

@Controller('/city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  async create(@Res() res, @Body() createdCityDto: CreateCityDto) {
    const data = await this.cityService.create(createdCityDto);
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      message: 'City Created successfully',
      payload: data,
    });
  }

  @Get()
  async findAll(
    @Res() res,
    @Query('from') from = 0,
    @Query('limit') limit = 0,
  ) {
    const data = await this.cityService.findAll(from, limit);
    const total = await this.cityService.total();
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      payload: data,
      total: total,
    });
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const data = await this.cityService.findOne(id);
    if (!data) {
      throw new NotFoundException('City Not Found');
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
    @Body() updateCityDto: UpdateCityDto,
  ) {
    const data = await this.cityService.update(id, updateCityDto);
    if (!data) {
      throw new NotFoundException('City Not Found');
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'City Updated Successfully',
      payload: data,
    });
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const data = await this.cityService.remove(id);
    if (!data) {
      throw new NotFoundException('City Not Found');
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'City deleted successfully',
      payload: data,
    });
  }
}
