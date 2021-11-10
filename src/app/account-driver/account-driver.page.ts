import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-driver',
  templateUrl: './account-driver.page.html',
  styleUrls: ['./account-driver.page.scss'],
})
export class AccountDriverPage implements OnInit {

  ionicForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['Test First and Last name'],
      email: ['driver@best'],
      gender: ['m'],
      guide: ['elder'],
      languages: ['Portuguese'],
      phone:['919345678'],
      address:['123 Test Street'],
      postal:['1749-024 Lisboa'],
      country:['Portugal'],
      city:['Lisboa'],
      compName:['BestRide Comp'],
      workAddress:['468 Test Street'],
      workPhone:['936658909'],
      originCountry:['Portugal'],
      vehicles:['Tuk Tuk'],
      availabilityHoursSince:['09:00Z'],
      availabilityHoursUntil:['22:00Z'],
      nif:['230456133'],
      nameCourse:['Turism Course 2002'],
      driverLicense:['LL-235363 0'],
      ancat:['157678901'],
      rnaat:['123768539'],
      iban:['PT50 2345 102030 23678690'],
      emergencyName:['Name Emergency'],
      emergencyPhone:['936789321'],
      relation:['Father'],
      type:['Guide'],
      about:['Small Text about me'],
      link:['https://www.youtube.com/2Xt56'],
      dateActivity:['17 January 2010'],
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

  public alterarPass(): void {

  }

  public deleteAccount(): void {
    //this.dadosContaApi.deleteUser();
  }

}
