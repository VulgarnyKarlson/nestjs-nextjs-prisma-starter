import { Injectable } from '@nestjs/common';
import { Prisma, prisma } from './prisma-client';
import { PRISMA_ENDPOINT } from './config';

@Injectable()
export class PrismaClientService {
  private readonly prisma: Prisma = new Prisma({
    endpoint: PRISMA_ENDPOINT,
  });
  getPrismaClient(): Prisma {
    return this.prisma;
  }
}
