import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestService } from './test.service';
import { Test1, Test1Schema } from './test1.schema';
import { Test2, Test2Schema } from './test2.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Test1.name,
          schema: Test1Schema,
        },
      ],
      'connection1',
    ),
    MongooseModule.forFeature(
      [
        {
          name: Test2.name,
          schema: Test2Schema,
        },
      ],
      'connection2',
    ),
  ],
  providers: [TestService],
  exports: [TestService],
})
export class TestModule {}
