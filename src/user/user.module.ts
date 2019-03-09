import { Module, forwardRef } from '@nestjs/common';

import { ConfigModule } from 'src/config/config.module';
import { PrismaModule } from 'src/prisma';
import { AuthModule } from 'src/auth';

import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    ConfigModule,
    PrismaModule,
  ],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
