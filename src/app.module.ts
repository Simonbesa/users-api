import { Module } from '@nestjs/common';
import { SignModule } from './sign/sign.module';

@Module({
  imports: [SignModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
