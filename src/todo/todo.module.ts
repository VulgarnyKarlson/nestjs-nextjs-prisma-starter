import { Module } from "@nestjs/common";
import { TodoResolver } from "./todo.resolver";
import { PubSubService } from "../../src/pubsub.service";
import { PrismaClientService } from "../../src/prisma.service";

@Module({
  providers: [
    TodoResolver,
    PubSubService,
    PrismaClientService,
  ],
})
export class TodoModule {}
