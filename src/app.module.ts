import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProblemController } from './problem/problem.controller';

@Module({
  imports: [],
  controllers: [AppController, ProblemController],
  providers: [AppService],
})
export class AppModule {}
