// Packages
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as schema } from 'mongoose';

// Schemas
import { Category } from 'src/category/schemas/category.schema';
import { City } from 'src/city/schemas/city.schema';
import { User } from 'src/user/schemas/user.schema';

@Schema({ timestamps: true })
export class News extends Document {
  @Prop({ uppercase: true })
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

  @Prop({ type: schema.Types.ObjectId, ref: 'User' })
  author: User;

  @Prop({ type: schema.Types.ObjectId, ref: 'City' })
  location: City;

  @Prop({ default: true })
  status: boolean;
}
export const NewsSchema = SchemaFactory.createForClass(News);
