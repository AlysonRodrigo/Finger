import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchemas } from './schemas/task.schemas';
import { TaskService } from './shared/task.service';
import { TasksController } from './tasks.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Task', schema: TaskSchemas}])
    ],
    controllers:[TasksController],
    providers:[TaskService]
})
export class TasksModule {}
