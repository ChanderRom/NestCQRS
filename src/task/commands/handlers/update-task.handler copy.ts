import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateTaskCommand } from '../update-task.command';
import { TaskService } from '../../task.service';

@CommandHandler(UpdateTaskCommand)
export class UpdateTaskHandler implements ICommandHandler<UpdateTaskCommand> {
  constructor(private readonly taskService: TaskService) {}

  async execute(command: UpdateTaskCommand) {
    const { updateTaskDto } = command;
    return this.taskService.updateTask(updateTaskDto);
  }
}