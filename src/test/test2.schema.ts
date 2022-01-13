import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type Test2Document = Test2 & Document;

@Schema()
export class Test2 {
  @Prop()
  id: string;
}

export const Test2Schema = SchemaFactory.createForClass(Test2);
