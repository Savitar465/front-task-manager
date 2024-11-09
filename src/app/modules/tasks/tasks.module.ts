import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksMainComponent} from "./pages/tasks-main/tasks-main.component";
import {TaskItemComponent} from "./components/task-item/task-item.component";
import {TasksRoutingModule} from "./tasks-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {CreateTaskComponent} from "./components/create-task/create-task.component";
import {DateInputComponent} from "./components/create-task/components/date-input/date-input.component";


@NgModule({
  declarations: [
    TasksMainComponent,
    TaskItemComponent,
    CreateTaskComponent,
    DateInputComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TasksRoutingModule
  ],
})
export class TasksModule {
}
