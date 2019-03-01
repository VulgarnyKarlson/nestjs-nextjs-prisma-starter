import { Injectable } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';

@Injectable()
export class PubSubService {
  private pubsub: PubSub;

  constructor() {
    this.pubsub = new PubSub();
  }

  getPubSub(): PubSub {
    return this.pubsub;
  }
}
