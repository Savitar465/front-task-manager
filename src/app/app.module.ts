import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {provideHttpClient} from "@angular/common/http";
import {IonicModule} from '@ionic/angular';
import {provideIonicAngular} from '@ionic/angular/standalone';
import {RouterModule} from "@angular/router";
import {HomeModule} from "./modules/home/home.module";
import {CoreModule} from "./core/core.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HomeModule,
    RouterModule.forRoot([]),
    IonicModule.forRoot(),
    CoreModule
  ],
  providers: [
    provideHttpClient(),
    provideIonicAngular({}),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
