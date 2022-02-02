// Packages
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Department extends Document {
  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop()
  Country: string;

  @Prop()
  status: boolean;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
