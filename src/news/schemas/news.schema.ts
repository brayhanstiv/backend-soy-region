// Packages
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as schema } from 'mongoose';

// Schemas
import { Category } from './../../category/schemas/category.schema';
import { City } from 'src/city/schemas/city.schema';

@Schema({ timestamps: true })
export class News extends Document {
  @Prop()
  title: string;

  @Prop()
  date: Date;

  @Prop({ type: schema.Types.ObjectId, ref: 'Category' })
  category: Category;

  @Prop()
  content: string;

  @Prop()
  images: string[];

  @Prop()
  video: string;

  @Prop()
  author: string;

  @Prop({ type: schema.Types.ObjectId, ref: 'City' })
  location: City;

  @Prop()
  status: boolean;
}
export const NewsSchema = SchemaFactory.createForClass(News);
