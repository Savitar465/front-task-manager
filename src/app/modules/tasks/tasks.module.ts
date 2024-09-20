import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksMainComponent} from "./pages/tasks-main/tasks-main.component";
import {TaskItemComponent} from "./components/task-item/task-item.component";
import {TasksRoutingModule} from "./tasks-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {CreateTaskComponent} from "./components/create-task/create-task.component";


@NgModule({
  declarations: [
    TasksMainComponent,
    TaskItemComponent,
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TasksRoutingModule
  ],
})
export class TasksModule {
}
