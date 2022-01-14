import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { TestModule } from './test.module';
import { TestService } from './test.service';
import { Test1, Test1Document } from './test1.schema';
import { Test2 } from './test2.schema';

const mockModel = {
  create: jest.fn(),
  updateOne: jest.fn(),
  deleteOne: jest.fn(),
  findOne: jest.fn(),
};

describe('TestService', () => {
  let testService: TestService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [TestModule],
      providers: [
        {
          provide: getModelToken(Test1.name),
          useFactory: () => mockModel,
        },
        {
          provide: getModelToken(Test2.name),
          useFactory: () => mockModel,
        },
      ],
    }).compile();

    testService = moduleRef.get<TestService>(TestService);
  });

  describe('createTest1', () => {
    it('should create test', async () => {
      jest.spyOn(mockModel, 'create').mockResolvedValue({});
      const test1 = { id: 'dummy' } as Test1Document;

      const result = await testService.createTest1(test1);

      expect(result).toHaveBeenCalled();
    });
  });
});
