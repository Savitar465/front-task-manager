import {Component, OnInit} from '@angular/core';
import {addIcons} from "ionicons";
import {add, search} from "ionicons/icons";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  paletteToggle = false;

  constructor() {
    addIcons({
      add,
      search
    })
  }

  ngOnInit(): void {
    this.initializeDarkPalette(this.paletteToggle);
  }

  // Check/uncheck the toggle and update the palette based on isDark
  initializeDarkPalette(isDark: boolean) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark palette
  toggleChange(ev: { detail: { checked: boolean; }; }) {
    this.toggleDarkPalette(ev.detail.checked);
  }

  // Add or remove the "ion-palette-dark" class on the html element
  toggleDarkPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }

}
