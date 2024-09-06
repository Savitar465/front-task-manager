import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'tasks',
        loadChildren: () => import('../tasks/tasks.module').then(m => m.TasksModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
