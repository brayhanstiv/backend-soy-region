// Packages
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  rol: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  user: string;

  @Prop()
  status: boolean;
}
export const UserSchema = SchemaFactory.createForClass(User);
