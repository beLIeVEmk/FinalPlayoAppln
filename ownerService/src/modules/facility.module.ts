import { Module } from '@nestjs/common';
import { FacilityController } from 'src/controllers/facility.controller';
import { MongoModule } from 'src/database/mongo.module';
import { FacilityService } from 'src/services/facility.service';
import { HelperFunctions } from 'src/utils/helperFunctions';


@Module({
  imports: [],
  controllers: [FacilityController],
  providers: [FacilityService],
})
export class FacilityModule {}