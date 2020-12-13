import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';
// import { Task } from './task.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
  // private tasks: Task[] = [];

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

  // getTaskById(id: string): Task {
  //   const found = this.tasks.find(task => task.id === id)
  //   if(!found) {
  //     throw new NotFoundException(`Task with ID "${id}" not found`)
  //   }
  //   return found
  // }

  // createTask(createTaskDto: CreateTaskDto) {
  //   const { title, description } = createTaskDto
    
  //   const task: Task = {
  //     id: uuidv4(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN
  //   }
    

  //   this.tasks.push(task);
  //   return task;
  // }

  // deleteTask(id: string): void {
  //   const found = this.getTaskById(id)
  
  //   this.tasks = this.tasks.filter(task => task.id !== found.id)
  // }

  // updateStatus(id: string, status: TaskStatus): Task {
  //   const taskUpdate = this.getTaskById(id)
  //   taskUpdate.status = status
  //   return taskUpdate
  // }
}
