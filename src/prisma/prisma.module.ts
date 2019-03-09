import { Module } from '@nestjs/common';
import { PrismaClientService } from './prisma.service';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [ConfigModule],
  providers: [PrismaClientService],
  exports: [PrismaClientService],
})
export class PrismaModule {}
