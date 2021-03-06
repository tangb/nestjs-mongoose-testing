import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_CONNECTION_CONNECTION1, {
      useFindAndModify: false,
      connectionName: 'connection1',
    }),
    MongooseModule.forRoot(process.env.DATABASE_CONNECTION_CONNECTION2, {
      useFindAndModify: false,
      connectionName: 'connection2',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
