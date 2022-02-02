import { City, CitySchema } from './schemas/city.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),
  ],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
