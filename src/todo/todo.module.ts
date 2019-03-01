import { Module } from "@nestjs/common";
import { TodoResolver } from "./todo.resolver";
import { PubSubService } from "../../src/pubsub.service";
import { PrismaClientService } from "../../src/prisma.service";
import { TodoService } from "./todo.service";

@Module({
  providers: [
    TodoResolver,
    TodoService,
    PubSubService,
    PrismaClientService,
  ],
})
export class TodoModule {}
