import { Module } from '@nestjs/common';
import { GraphQLSchema } from 'graphql';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { PrismaClientService } from './app.service';
import { getRemotePrismaSchema } from './prisma.schema';
import { mergeSchemas } from 'graphql-tools';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./graphql/*.graphql'],
      debug: true,
      playground: true,
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
