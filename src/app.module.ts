import { Module } from '@nestjs/common';

import { CommonModules } from './common-modules';

@Module({
  imports: [
    ...CommonModules,
  ],
})
export class AppModule {}
