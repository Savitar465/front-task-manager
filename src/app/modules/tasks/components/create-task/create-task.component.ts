import { Component } from '@angular/core';
import {TasksService} from "../../../../core/modules/tasks/services/tasks.service";
import {TaskRequest} from "../../../../core/modules/tasks/requests/task.request";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
})
export class CreateTaskComponent {
  constructor(
    private tasksService: TasksService,
  ) { }

  createTask() {
    let taskRequest :TaskRequest = {
      title: 'Task 1',
      description: 'Description 1',
    }
    this.tasksService.postTask(taskRequest);
  }
}
