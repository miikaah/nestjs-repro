import { Controller, Get, Param } from '@nestjs/common';

@Controller('problem')
export class ProblemController {
  @Get(':id')
  findOne(@Param() params) {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
