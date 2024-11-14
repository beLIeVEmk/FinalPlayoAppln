import { Module } from '@nestjs/common';
import { AuthController } from 'src/controllers/authService.controller';
import { MongoModule } from 'src/database/mongo.module';
import { AuthService } from 'src/services/auth.service';
import { HelperFunctions } from 'src/utils/helperFunctions';


@Module({
  imports: [MongoModule],
  controllers: [AuthController],
  providers: [AuthService,HelperFunctions],
})
export class AuthModule {}
