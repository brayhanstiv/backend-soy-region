// Packages
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class News extends Document {
  @Prop()
  title: string;

  @Prop()
  date: Date;

  @Prop()
  category: string;

  @Prop()
  content: string;

  @Prop()
  images: [];

  @Prop()
  video: string;

  @Prop()
  author: string;

  @Prop()
  location: string;

  @Prop()
  status: boolean;
}
export const NewsSchema = SchemaFactory.createForClass(News);
