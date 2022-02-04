import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './schemas/news.schema';

@Injectable()
export class NewsService {
  constructor(@InjectModel(News.name) private newsModel: Model<News>) {}

  async create(createNewsDto: CreateNewsDto): Promise<News> {
    const createdNews = new this.newsModel(createNewsDto);
    return createdNews.save();
  }

  async findAll(from: number, limit: number): Promise<News[]> {
    return this.newsModel.find({ status: true }).skip(from).limit(limit).exec();
  }

  async findOne(id: string): Promise<News> {
    return this.newsModel.findById(id);
  }

  async update(id: string, updateNewsDto: UpdateNewsDto): Promise<News> {
    return this.newsModel.findByIdAndUpdate(id, updateNewsDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<News> {
    return this.newsModel.findByIdAndDelete(id);
  }

  async total(): Promise<number> {
    return this.newsModel.countDocuments({ status: true });
  }
}
