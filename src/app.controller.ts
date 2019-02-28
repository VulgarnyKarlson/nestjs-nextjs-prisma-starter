import { Controller, Get } from '@nestjs/common';
import { PrismaClientService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly prismaClientService: PrismaClientService) {}

  @Get()
  getHello(): string {
    return 'hey';
  }
}
