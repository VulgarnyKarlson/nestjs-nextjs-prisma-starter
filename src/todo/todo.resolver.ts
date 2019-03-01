import { Resolver } from '@nestjs/graphql';
import { PrismaClientService } from "../prisma.service";
import { PubSubService } from "../pubsub.service";
import { Query } from "@nestjs/common";

@Resolver('Todo')
export class TodoResolver {
  constructor(
    private readonly prismaService: PrismaClientService,
    private readonly pubsubService: PubSubService,
  ) {}

  @Query()
  async getTodos() {
    const prisma = this.prismaService.getPrismaClient();
    return prisma.todoes();
  }
}
