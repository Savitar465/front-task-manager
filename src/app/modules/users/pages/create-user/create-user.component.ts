import {Component, OnInit} from '@angular/core';
import {addIcons} from "ionicons";
import {lockClosedOutline, mailOutline, personAddOutline, personCircleOutline} from "ionicons/icons";
import {UsersService} from "../../../../core/modules/users/services/users.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserRequest} from "../../../../core/modules/users/request/user.request";
import {ToastController} from "@ionic/angular";
import {Colors, ToastPosition} from "../../../../core/modules/shared/enums/ionic.enum";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private readonly usersService: UsersService,
    private readonly formBuilder: FormBuilder,
    private readonly toastController: ToastController
  ) {
    addIcons({personAddOutline, personCircleOutline, lockClosedOutline, mailOutline});
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }


  async createUser() {
    if (this.form.valid) {
      const userRequest: UserRequest = this.form.value;
      this.usersService.postUser(userRequest).subscribe(
        response => {
          if (response.responseKey === 200) {
            console.log(response.data);
          }
        }
      );
    } else {
      const toast = await this.toastController.create({
        message: 'Please fill all the fields correctly',
        duration: 1500,
        position: ToastPosition.TOP,
        color: Colors.DANGER
      });
      await toast.present();
    }
  }

}
