import { config } from 'dotenv';

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

config({
  path: process.env.NODE_ENV.startsWith('prod')
    ? '.env.production'
    : '.env.development',
});

const {
  PORT,
  PRISMA_ENDPOINT,
} = process.env;

export {
  PORT,
  PRISMA_ENDPOINT,
};
