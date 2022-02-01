import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { NewsModule } from './news/news.module';
import { CategoryModule } from './category/category.module';
import { CityModule } from './city/city.module';
import { DepartmentModule } from './department/department.module';
import { CountryModule } from './country/country.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    NewsModule,
    CategoryModule,
    CityModule,
    DepartmentModule,
    CountryModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/soyregion'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
