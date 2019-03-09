import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';

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
  APP_SECRET,
  TOKEN_EXPIRATION,
} = process.env;
if ([PORT, PRISMA_ENDPOINT, APP_SECRET].includes(undefined)) {
  throw new Error('Missing configuration. Please check .env');
}

export {
  PORT,
  PRISMA_ENDPOINT,
  APP_SECRET,
  TOKEN_EXPIRATION,
};

@Injectable()
export class ConfigService {
  get port(): number {
    return Number(PORT);
  }

  get prismaEndpoint(): string {
    return PRISMA_ENDPOINT!;
  }

  get appSecret(): string {
    return APP_SECRET!;
  }

  get tokenExpiration(): number {
    return Number(TOKEN_EXPIRATION);
  }
}
