import { join } from 'path';
import { GraphQLSchema } from 'graphql';
import { mergeSchemas } from 'graphql-tools';
import { GraphQLModule, GqlModuleOptions } from '@nestjs/graphql';
import { PrismaClientService, PrismaModule } from 'src/common-modules/prisma';

export default GraphQLModule.forRootAsync({
  imports: [PrismaModule],
  useFactory: (prismaClientService: PrismaClientService) => {
    return {
      typePaths: ['./src/**/*.graphql'],
      debug: true,
      playground: true,
      installSubscriptionHandlers: true,
      context: ({ req }: { req: any }) => ({ req }),
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'class',
      },

      /**
       * this method exposes prisma directly by merging prisma schema
       */
      transformSchema: async (schema: GraphQLSchema) => {
        const prismaSchema = await prismaClientService.getRemotePrismaSchema();

        if (!prismaSchema) {
          return schema;
        }

        return mergeSchemas({
          schemas: [schema, prismaSchema],
        });
      },
    } as GqlModuleOptions;
  },
  inject: [PrismaClientService],
});
