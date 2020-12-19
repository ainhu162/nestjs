import { TaskStatus } from './../task-status.enum';
import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class TaskStatusValidationPipe implements PipeTransform {

  transform(value: any, metadata?: ArgumentMetadata) {
    value = value.toUpperCase()
    if(!this.isStatusValid(value)){
      throw new BadRequestException(`${value} is invalid status`)
    }
    return value
  }

  private isStatusValid(status: any) {
    return !!TaskStatus[status]
  }
}