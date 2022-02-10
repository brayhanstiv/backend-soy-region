// Packages
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as schema } from 'mongoose';

// Country
import { Country } from '../../country/schemas/country.schema';

@Schema({ timestamps: true })
export class Department extends Document {
  @Prop({ uppercase : true })
  name: string;

  @Prop()
  code: string;

  @Prop({ type: schema.Types.ObjectId, ref: 'Country' })
  Country: Country;

  @Prop({ default: true })
  status: boolean;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
