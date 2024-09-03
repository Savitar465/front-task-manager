import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TasksMainComponent} from "./pages/tasks-main/tasks-main.component";
import {TaskItemComponent} from "./components/task-item/task-item.component";
import {TasksRoutingModule} from "./tasks-routing.module";


@NgModule({
  declarations: [
    TasksMainComponent,
    TaskItemComponent
  ],
  imports: [
    TasksRoutingModule,
    CommonModule,
    // IonicModule,
  ]
})
export class TasksModule { }
