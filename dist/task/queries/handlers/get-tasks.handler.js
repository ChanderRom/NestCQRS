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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTasksHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const get_tasks_query_1 = require("../impl/get-tasks.query");
let GetTasksHandler = class GetTasksHandler {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute() {
        return this.taskRepository.find({});
    }
};
exports.GetTasksHandler = GetTasksHandler;
exports.GetTasksHandler = GetTasksHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_tasks_query_1.GetTasksQuery),
    __param(0, (0, common_1.Inject)('TASK_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], GetTasksHandler);
//# sourceMappingURL=get-tasks.handler.js.map