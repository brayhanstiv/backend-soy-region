import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './schemas/city.schema';

@Injectable()
export class CityService {
  constructor(@InjectModel(City.name) private cityModel: Model<City>) {}

  async create(createCityDto: CreateCityDto): Promise<City> {
    const createdCity = new this.cityModel(createCityDto);
    return createdCity.save();
  }

  async findAll(from: number, limit: number): Promise<City[]> {
    return this.cityModel.find({ status: true }).skip(from).limit(limit).exec();
  }

  async findOne(id: string): Promise<City> {
    return this.cityModel.findById(id);
  }

  async update(id: string, updateCityDto: UpdateCityDto): Promise<City> {
    return this.cityModel.findByIdAndUpdate(id, updateCityDto, { new: true });
  }

  async remove(id: string): Promise<City> {
    return this.cityModel.findByIdAndDelete(id);
  }

  async total(): Promise<number> {
    return this.cityModel.countDocuments({ status: true });
  }
}
