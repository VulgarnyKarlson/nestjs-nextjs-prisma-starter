import { Module, forwardRef } from '@nestjs/common';
import { PrismaModule } from 'src/common-modules/prisma';

import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { ConfigModule } from 'src/common-modules/config/config.module';
import { AuthModule } from '../auth';

@Module({
  imports: [
    ConfigModule,
    PrismaModule,
    forwardRef(() => AuthModule),
  ],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
