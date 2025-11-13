// task.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) { }

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find({
      order: { id: 'ASC' }
    })
  }


  async findById(id: number): Promise<Todo | null> {
    const todo = await this.todoRepository.findOne({
      where: { id }
    })
    return todo
  }


  async update(id: number, dto: UpdateTodoDto): Promise<Todo> {
    const isExist = await this.findById(id)
    if (!isExist) {
      throw new NotFoundException("Belirtilen id numaralı todo bulunamadı")
    }
    const updated = Object.assign(isExist, dto)
    return await this.todoRepository.save(updated)
  }


  async create(dto: CreateTodoDto): Promise<Todo> {
    const todo = this.todoRepository.create(dto);
    return await this.todoRepository.save(todo);
  }

  async delete(id:number){
    const isExist=await this.findById(id)
    if(!isExist){
      throw new NotFoundException("Belirtilen id numaralı todo bulunamadı")
    }
    await this.todoRepository.delete(id)
    return JSON.stringify({message:"Yapılacak iş başarıyla silindi"})
  }
}
