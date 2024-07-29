import { Module } from '@nestjs/common';
import { DataService } from './data/data.service';
import { DataController } from './data/data.controller';

@Module({
  imports: [],
  controllers: [DataController],
  providers: [DataService],
})
export class AppModule {}
