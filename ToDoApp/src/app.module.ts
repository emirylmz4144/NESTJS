import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo/entities/todo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'emirEmir41',               
      database: 'todoapp',
      entities: [Todo],            
      synchronize: true,           
    }),

    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
