import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './config/dbConfig';

@Module({
  imports:

    [
      ConfigModule.forRoot({
        isGlobal: true,
        expandVariables: true,
        load: [dbConfig]
      }),

      TypeOrmModule.forRootAsync({
        useFactory: dbConfig
      }),

      TodoModule,
    ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
