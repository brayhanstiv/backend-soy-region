// Packages
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as schema } from 'mongoose';

// Country
import { Country } from '../../country/schemas/country.schema';

@Schema({ timestamps: true })
export class Department extends Document {
  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop({ type: schema.Types.ObjectId, ref: 'Country' })
  Country: Country;

  @Prop()
  status: boolean;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
