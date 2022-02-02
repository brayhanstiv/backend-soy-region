// Packages
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Country extends Document {
  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop()
  status: boolean;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
