import { Component } from '@angular/core';
import {addIcons} from "ionicons";
import {add, search} from "ionicons/icons";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {

  constructor() {
    addIcons({
      add,
      search
    })
  }

}
