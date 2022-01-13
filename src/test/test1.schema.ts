import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type Test1Document = Test1 & Document;

@Schema()
export class Test1 {
  @Prop()
  id: string;
}

export const Test1Schema = SchemaFactory.createForClass(Test1);
