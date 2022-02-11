// Packages
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Country extends Document {
  @Prop({ uppercase: true })
  name: string;

  @Prop()
  alpha2Code: string;

  @Prop()
  alpha3Code: string;

  @Prop({ default: true })
  status: boolean;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
