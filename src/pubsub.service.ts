import { Injectable } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';

@Injectable()
export class PubSubService {
  private readonly pubsub: PubSub = new PubSub();

  getPubSub(): PubSub {
    return this.pubsub;
  }
}
