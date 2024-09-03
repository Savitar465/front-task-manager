import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TasksMainComponent} from "./pages/tasks-main/tasks-main.component";

const routes: Routes = [
  {
    path: '',
    component: TasksMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
