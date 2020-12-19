import { TaskRepository } from './task.repository';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepo: TaskRepository
  ) {

  }
  getTasks(filterDto: GetTasksFilterDto):Promise<Task[]> {
    return this.taskRepo.getTasks(filterDto)
  }

  // getAllTasks(): Task[] {
  //   return this.tasks
  // }

  // getTaskWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto
  //   let tasks = this.getAllTasks()
  //   if(status) {
  //     tasks = tasks.filter(task => task.status === status)
  //   }
  //   if(search) {
  //     tasks = tasks.filter(task => 
  //       task.title.includes(search)|| task.description.includes(search))
  //   }
  //   return tasks
  // }

  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepo.findOne(id)
    if(!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`)
    }
    return found
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepo.createTask(createTaskDto)
  }

  async deleteTask(id: number): Promise<void> {
    const result = this.taskRepo.delete(id)
    if((await result).affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`)
    }
  }

  async updateStatus(id: number, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id)
    task.status = status
    await task.save()
    return task
    // await this.taskRepo.update(id, {status})
  }
}
