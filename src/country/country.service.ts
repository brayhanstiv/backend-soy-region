import { Country } from './schemas/country.schema';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name) private countryModel: Model<Country>,
  ) {}

  async create(createCountryDto: CreateCountryDto): Promise<Country> {
    const createdCountry = new this.countryModel(createCountryDto);
    return createdCountry.save();
  }

  async findAll(from: number, limit: number): Promise<Country[]> {
    return this.countryModel
      .find({ status: true })
      .skip(from)
      .limit(limit)
      .exec();
  }

  async findOne(id: string): Promise<Country> {
    return this.countryModel.findById(id);
  }

  async update(
    id: string,
    updateCountryDto: UpdateCountryDto,
  ): Promise<Country> {
    return this.countryModel.findByIdAndUpdate(id, updateCountryDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<Country> {
    return this.countryModel.findByIdAndDelete(id);
  }
  async total(): Promise<number> {
    return this.countryModel.countDocuments({ status: true });
  }
}
