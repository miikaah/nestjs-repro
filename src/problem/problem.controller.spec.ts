import { Test, TestingModule } from '@nestjs/testing';
import { ProblemController } from './problem.controller';

describe('Problem Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ProblemController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ProblemController = module.get<ProblemController>(ProblemController);
    expect(controller).toBeDefined();
  });
});
