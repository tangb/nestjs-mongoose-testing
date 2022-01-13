import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Test1, Test1Document } from './test1.schema';
import { Test2, Test2Document } from './test2.schema';
import { Model } from 'mongoose';

@Injectable()
export class TestService {
  constructor(
    @InjectModel(Test1.name) private test1Model: Model<Test1Document>,
    @InjectModel(Test2.name) private test2Model: Model<Test2Document>,
  ) {}

  async createTest1(test1: Test1Document): Promise<Test1> {
    const newTest1 = new this.test1Model(test1);
    return newTest1.save();
  }

  async createTest2(test2: Test2Document): Promise<Test2> {
    const newTest2 = new this.test2Model(test2);
    return newTest2.save();
  }
}
