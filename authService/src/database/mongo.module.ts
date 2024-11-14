
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'src/config/config';
import { UserModel, UserSchema } from 'src/schema/auth.schema';

@Module({
  imports: [MongooseModule.forRoot(config.db.mongo.database.connectionString),
    MongooseModule.forFeature([{ name: UserModel, schema: UserSchema,collection:config.db.mongo.collections.user }])
  ],
  exports:[MongooseModule]
})
export class MongoModule {}
