import { Module } from '@nestjs/common';
import { ConfigModule } from './config';
import { AuthModule } from './auth';
import { UserModule } from './user';
import { PubSubModule } from './pubsub';
import { PrismaModule } from './prisma';
import GraphQLModule from './graphql.module';


@Module({
  imports: [
    ConfigModule,
    AuthModule,
    UserModule,
    PubSubModule,
    PrismaModule,
    GraphQLModule,
  ],
})
export class AppModule {}
