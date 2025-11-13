// task.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('tasks')
export class Todo {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 1000, nullable: false })
  description: string;

  @Column({ default: false })
  status: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
