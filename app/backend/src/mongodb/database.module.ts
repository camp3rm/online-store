import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserModel } from '../user/user.model';

@Global()
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/mydb'),
    MongooseModule.forFeature([{ name: User.name, schema: UserModel.schema }])
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}