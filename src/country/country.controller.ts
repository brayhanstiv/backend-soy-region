import { UpdateCountryDto } from './dto/update-country.dto';
import { CreateCountryDto } from './dto/create-country.dto';
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
import { CountryService } from './country.service';

@Controller('/country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  async create(@Res() res, @Body() createdCountryDto: CreateCountryDto) {
    const data = await this.countryService.create(createdCountryDto);
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      massage: 'Country Created Seccessfully',
      payload: data,
    });
  }

  @Get()
  async findAll(
    @Res() res,
    @Query('from') from = 0,
    @Query('limit') limit = 10,
  ) {
    const data = await this.countryService.findAll(from, limit);
    const total = await this.countryService.total();
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      payload: data,
      total: total,
    });
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const data = await this.countryService.findOne(id);
    if (!data) {
      throw new NotFoundException('Country Not Found');
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
    @Body() updateCountryDto: UpdateCountryDto,
  ) {
    const data = await this.countryService.update(id, updateCountryDto);
    if (!data) {
      throw new NotFoundException('Country Not Found');
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Country Updated Successfully',
      payload: data,
    });
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const data = await this.countryService.remove(id);
    if (!data) {
      throw new NotFoundException('Country Not Found');
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Country deleted Successfully',
    });
  }
}
