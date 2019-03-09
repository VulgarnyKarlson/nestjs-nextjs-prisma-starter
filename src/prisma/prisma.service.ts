import { Injectable, Logger } from '@nestjs/common';
import { HttpLink } from 'apollo-link-http';
import { GraphQLSchema } from 'graphql';
import { introspectSchema, makeRemoteExecutableSchema } from 'graphql-tools';
import fetch from 'isomorphic-unfetch';

import { ConfigService } from 'src/common-modules/config';
import { Prisma } from './prisma-client';

@Injectable()
export class PrismaClientService {
  private readonly logger = new Logger(PrismaClientService.name);
  private prisma: Prisma;

  constructor(
    private readonly configService: ConfigService,
  ) {
    this.prisma = new Prisma({
      endpoint: configService.prismaEndpoint,
    });
  }

  getPrismaClient(): Prisma {
    return this.prisma;
  }

  async getRemotePrismaSchema(): Promise<GraphQLSchema | null> {
    try {
      const prismaLink = new HttpLink({
        uri: this.configService.prismaEndpoint,
        fetch,
      });

      const prismaIntrospect = await introspectSchema(prismaLink);

      return makeRemoteExecutableSchema({
        schema: prismaIntrospect,
        link: prismaLink,
      });
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }
}
