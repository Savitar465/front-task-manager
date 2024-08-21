import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TasksMainComponent} from "./pages/tasks-main/tasks-main.component";
import {TaskItemComponent} from "./components/task-item/task-item.component";



@NgModule({
  declarations: [
    TasksMainComponent,
    TaskItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TasksModule { }
