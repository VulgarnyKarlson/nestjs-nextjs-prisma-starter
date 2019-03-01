import { Resolver, Query } from '@nestjs/graphql';
import { Logger } from "@nestjs/common";
import { PrismaClientService } from '../../src/prisma.service';

@Resolver('TodoItem')
export class TodoResolver {
  private readonly logger = new Logger(TodoResolver.name);

  constructor(
    private readonly prismaService: PrismaClientService,
  ) {}

  @Query('todos')
  async getTodos() {
    const prisma = this.prismaService.getPrismaClient();
    return prisma.todoes();
  }
}
