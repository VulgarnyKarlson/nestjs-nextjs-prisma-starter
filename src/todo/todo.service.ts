import * as Rx from 'rxjs';
import { Injectable, Logger } from "@nestjs/common";
import { PubSubService } from "src/pubsub.service";
import { PrismaClientService } from "src/prisma.service";
import { asyncIterableToObservable } from 'src/util';

@Injectable()
export class TodoService {
  private readonly logger = new Logger(TodoService.name);

  constructor(
    pubsubService: PubSubService,
    prismaService: PrismaClientService,
  ) {
    this.logger.log('service started');
    const pubsub = pubsubService.getPubSub();
    const prisma = prismaService.getPrismaClient();

    prisma.$subscribe.todoAction({
      mutation_in: ['CREATED'],
    }).node().then(asyncIterator => {
      const asyncIterable = {
        [Symbol.asyncIterator]() {
          return asyncIterator;
        },
      };

      const observable = asyncIterableToObservable(asyncIterable);

      observable.subscribe(node => {
        this.logger.log(node);
        prisma.createTodo({
          content: node.context,
          completed: false,
        }).then((todo) => {
          return prisma.todoes();
        }).then((todos) => {
          pubsub.publish('todoUpdated', {
            todoUpdated: todos,
          });
        }).catch(error => {
          this.logger.log(error);
        });
      });
    });
  }
}
