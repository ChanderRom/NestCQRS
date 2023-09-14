"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const update_task_command_1 = require("../update-task.command");
const task_service_1 = require("../../task.service");
let UpdateTaskHandler = class UpdateTaskHandler {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async execute(command) {
        const { updateTaskDto } = command;
        return this.taskService.updateTask(updateTaskDto);
    }
};
exports.UpdateTaskHandler = UpdateTaskHandler;
exports.UpdateTaskHandler = UpdateTaskHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_task_command_1.UpdateTaskCommand),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], UpdateTaskHandler);
//# sourceMappingURL=update-task.handler%20copy.js.map