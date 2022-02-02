// Packages
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class City extends Document {
  @Prop()
  name: string;

  @Prop()
  department: string;

  @Prop()
  status: boolean;
}

export const CitySchema = SchemaFactory.createForClass(City);
