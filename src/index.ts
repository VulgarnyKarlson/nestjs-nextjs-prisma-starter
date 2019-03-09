// Contains only a convinience export to Register on AppModule.

import { ConfigModule } from './config';
import { UserModule } from './user';
import { PrismaModule } from './prisma';
import { PubSubModule } from './pubsub';
import GraphQLModule from './graphql.module';
import { AuthModule } from './auth';

export const CommonModules = [
  ConfigModule,
  AuthModule,
  UserModule,
  PubSubModule,
  PrismaModule,
  GraphQLModule,
];
