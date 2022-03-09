import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-account-driver',
  templateUrl: './account-driver.page.html',
  styleUrls: ['./account-driver.page.scss'],
})
export class AccountDriverPage implements OnInit {
  ionicForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      guide: ['', Validators.required],
      languages: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      postal: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      compName: ['', Validators.required],
      workAddress: ['', Validators.required],
      workPhone: ['', Validators.required],
      originCountry: ['', Validators.required],
      vehicles: ['', Validators.required],
      availabilityHoursSince: ['', Validators.required],
      availabilityHoursUntil: ['', Validators.required],
      nif: ['', Validators.required],
      nameCourse: ['', Validators.required],
      driverLicense: ['', Validators.required],
      ancat: ['', Validators.required],
      rnaat: ['', Validators.required],
      iban: ['', Validators.required],
      emergencyName: ['', Validators.required],
      emergencyPhone: ['', Validators.required],
      relation: ['', Validators.required],
      type: ['', Validators.required],
      about: ['', Validators.required],
      link: ['', Validators.required],
      dateActivity: ['', Validators.required],
    });
  }

  public updateUser(): void {
    /*
    let dados_conta_dict = {
      name: this.ionicForm.value['name'],
      city: this.ionicForm.value['city'],
      email: this.ionicForm.value['email'],
      phone: this.ionicForm.value['phone'],
      address: this.ionicForm.value['address'],
    };
    this.dadosContaApi.updateUser(dados_conta_dict);
    */
    this.router.navigate(['/home']);
  }

  public alterarPass(): void {}

  public deleteAccount(): void {
    //this.dadosContaApi.deleteUser();
  }
}
