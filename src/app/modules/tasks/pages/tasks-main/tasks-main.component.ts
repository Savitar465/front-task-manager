import {Component, OnInit} from '@angular/core';
import {TasksService} from "../../../../core/modules/tasks/services/tasks.service";

@Component({
  selector: 'app-tasks-main',
  templateUrl: './tasks-main.component.html',
  styleUrl: './tasks-main.component.css'
})
export class TasksMainComponent implements OnInit {
  tasks: any[] = [];

  constructor(private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((data: any) => {
      this.tasks = data.data;
    });
  }

}
