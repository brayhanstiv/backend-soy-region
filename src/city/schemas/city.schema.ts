// Packages
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as schema } from 'mongoose';

// Schemas
import { Department } from './../../department/schemas/department.schema';

@Schema({ timestamps: true })
export class City extends Document {
  @Prop()
  name: string;

  @Prop({ type: schema.Types.ObjectId, ref: 'department' })
  department: Department;

  @Prop()
  status: boolean;
}

export const CitySchema = SchemaFactory.createForClass(City);
