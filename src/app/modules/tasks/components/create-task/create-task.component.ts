import {Component, OnInit} from '@angular/core';
import {TasksService} from "../../../../core/modules/tasks/services/tasks.service";
import {TaskRequest} from "../../../../core/modules/tasks/requests/task.request";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
})
export class CreateTaskComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly tasksService: TasksService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [''],
      description: [''],
      startDate: [''],
      dueDate: [''],
      stageId: [''],
      boardId: [''],
      assignee: [''],
      typeId: [''],
    });
  }

  createTask() {
    const taskRequest: TaskRequest = this.form.value;
    this.tasksService.postTask(taskRequest).subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
