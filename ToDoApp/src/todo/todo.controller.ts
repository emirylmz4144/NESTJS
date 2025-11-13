// task.controller.ts
import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('tasks')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll(){
    return this.todoService.findAll()
  }

  @Get(":id")
  findById(@Param('id') id:number){
    return this.todoService.findById(id)
  }

  @Post()
  create(@Body() dto: CreateTodoDto) {
    return this.todoService.create(dto);
  }

   @Patch(':id')
   update(@Param('id') id: number, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  deleteTask(@Param('id') id:number){
    return this.todoService.delete(id)
  }


}
