import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

import { Category } from './schemas/category.schema';
@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createdCategory = new this.categoryModel(createCategoryDto);
    return createdCategory.save();
  }

  async findAll(from: number, limit: number): Promise<Category[]> {
    return this.categoryModel
      .find({ status: true })
      .skip(from)
      .limit(limit)
      .exec();
  }

  async findOne(id: string): Promise<Category> {
    return this.categoryModel.findById(id);
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    return this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<Category> {
    return this.categoryModel.findByIdAndDelete(id);
  }

  async total(): Promise<number> {
    return this.categoryModel.countDocuments({ status: true });
  }
}
