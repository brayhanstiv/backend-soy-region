import { Department } from './schemas/department.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel(Department.name) private deparmentModel: Model<Department>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    const createdDepartment = new this.deparmentModel(createDepartmentDto);
    return createdDepartment.save();
  }

  async findAll(from: number, limit: number): Promise<Department[]> {
    return this.deparmentModel
      .find({ status: true })
      .skip(from)
      .limit(limit)
      .exec();
  }

  async findOne(id: string): Promise<Department> {
    return this.deparmentModel.findById(id);
  }

  async update(
    id: string,
    updateDepartmentDto: UpdateDepartmentDto,
  ): Promise<Department> {
    return this.deparmentModel.findByIdAndUpdate(id, updateDepartmentDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<Department> {
    return this.deparmentModel.findByIdAndDelete(id);
  }

  async total(): Promise<number> {
    return this.deparmentModel.countDocuments({ status: true });
  }
}
