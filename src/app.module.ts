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
      typePaths: ['./graphql/*.graphql'],
      debug: true,
      playground: true,
      transformSchema: async (schema: GraphQLSchema) => {
        const logger = new Logger('transformSchema');
        logger.log(schema);
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
