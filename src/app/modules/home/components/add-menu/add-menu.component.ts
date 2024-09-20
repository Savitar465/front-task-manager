import { Component } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {CreateTaskComponent} from "../../../tasks/components/create-task/create-task.component";

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
})
export class AddMenuComponent {

  constructor(
    private modalController: ModalController,
  ) { }

  openCreateModal() {
    this.modalController.create({
      component: CreateTaskComponent,
    }).then(modal => {
      modal.present();
    });

  }
}
