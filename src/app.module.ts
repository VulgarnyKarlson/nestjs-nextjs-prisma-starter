import { join } from 'path';
import { Module, Logger } from '@nestjs/common';
import { GraphQLSchema } from 'graphql';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { PrismaClientService } from './prisma.service';
import { getRemotePrismaSchema } from './prisma.schema';
import { mergeSchemas } from 'graphql-tools';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TodoModule,
    GraphQLModule.forRoot({
      typePaths: ['./src/**/*.graphql'],
      debug: true,
      playground: true,
      installSubscriptionHandlers: true,
      // definitions: {
      //   path: join(process.cwd(), 'src/graphql.schema.ts'),
      //   outputAs: 'class',
      // },
      transformSchema: async (schema: GraphQLSchema) => {
        const prismaSchema = await getRemotePrismaSchema();

        return mergeSchemas({
          schemas: [schema, prismaSchema],
        });
      },
    }),
  ],
  controllers: [AppController],
  providers: [PrismaClientService],
})
export class AppModule {}
