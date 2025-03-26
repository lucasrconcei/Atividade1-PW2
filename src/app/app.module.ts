import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from 'src/product/product.module';
import { NoticeModule } from 'src/notice/notice.module';

@Module({
  imports: [ProductModule, NoticeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
