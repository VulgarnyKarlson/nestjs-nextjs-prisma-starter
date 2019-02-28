import { Injectable } from '@nestjs/common';
import { Prisma, prisma } from './prisma-client';

@Injectable()
export class PrismaClientService {
  getPrismaClient(): Prisma {
    return prisma;
  }
}
