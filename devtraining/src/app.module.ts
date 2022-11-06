import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CoursesModule,
    TypeOrmModule.forRoot({
      type: 'postgres', //configService.get('DB_CONNECTION'),
      host: 'localhost', //configService.get('DB_HOST'),
      port: 5432, //configService.get('DB_PORT'),
      database: 'postgres', //configService.get('DB_DATABASE'),
      username: 'postgres', //configService.get('DB_USERNAME'),
      password: 'docker', //configService.get('DB_PASSWORD'),
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
