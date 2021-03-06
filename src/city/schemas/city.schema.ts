// Packages
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as schema } from 'mongoose';

// Schemas
import { Department } from './../../department/schemas/department.schema';

@Schema({ timestamps: true })
export class City extends Document {
  @Prop({ uppercase: true })
  name: string;

  @Prop({ type: schema.Types.ObjectId, ref: 'department' })
  department: Department;

  @Prop({ default: true })
  status: boolean;
}

export const CitySchema = SchemaFactory.createForClass(City);
