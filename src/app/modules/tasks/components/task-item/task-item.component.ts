import {Component, Input} from '@angular/core';
import {Task} from "../../../../core/modules/tasks/model/Task";
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;

}
