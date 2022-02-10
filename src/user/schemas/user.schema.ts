// Packages
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ uppercase : true })
  name: string;

  @Prop()
  rol: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  user: string;

  @Prop({ default: true })
  status: boolean;
}
export const UserSchema = SchemaFactory.createForClass(User);
