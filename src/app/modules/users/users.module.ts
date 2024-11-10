import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {CreateUserComponent} from "./pages/create-user/create-user.component";
import {UsersRoutingModule} from "./users-routing.module";



@NgModule({
  declarations: [
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
