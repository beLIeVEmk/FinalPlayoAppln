import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth.module';
import { MongoModule } from './database/mongo.module';

@Module({
  imports: [AuthModule,MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
