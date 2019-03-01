import { Logger } from '@nestjs/common';
import { Resolver, Query, Subscription } from '@nestjs/graphql';
import { PrismaClientService } from 'src/prisma.service';
import { PubSubService } from 'src/pubsub.service';

@Resolver('TodoItem')
export class TodoResolver {
  private readonly logger = new Logger(TodoResolver.name);

  constructor(
    private readonly prismaService: PrismaClientService,
    private readonly pubsubService: PubSubService,
  ) {}

  @Query('todos')
  async getTodos() {
    const prisma = this.prismaService.getPrismaClient();
    return prisma.todoes();
  }

  @Subscription('todoUpdated')
  todoUpdated() {
    const pubsub = this.pubsubService.getPubSub();
    this.logger.log(pubsub);
    return {
      subscribe: () => pubsub.asyncIterator('todoUpdated'),
    };
  }
}
