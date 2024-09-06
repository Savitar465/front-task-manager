import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from "./home-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {MainPageComponent} from "./main-page/main-page.component";
import {AddMenuComponent} from "./components/add-menu/add-menu.component";
import {SideBarComponent} from "./components/side-bar/side-bar.component";


@NgModule({
  declarations: [
    MainPageComponent,
    AddMenuComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
