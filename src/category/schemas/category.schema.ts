// Packages
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Category extends Document {
  @Prop({ uppercase: true })
  name: string;

  @Prop({ default: true })
  status: boolean;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
