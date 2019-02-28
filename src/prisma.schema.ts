import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

import {
  introspectSchema,
  makeRemoteExecutableSchema,
} from 'graphql-tools';

import { PRISMA_ENDPOINT } from './config';

async function getRemotePrismaSchema() {
  const prismaLink = new HttpLink({
    uri: PRISMA_ENDPOINT,
    fetch,
  });

  const prismaIntrospect = await introspectSchema(prismaLink);

  return makeRemoteExecutableSchema({
    schema: prismaIntrospect,
    link: prismaLink,
  });
}

export { getRemotePrismaSchema };
