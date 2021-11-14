import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateDriverServiceService } from './create-driver-service.service';

@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.page.html',
  styleUrls: ['./create-driver.page.scss'],
})
export class CreateDriverPage implements OnInit {
  public driverForm: FormGroup;
  public isSubmitted = false;

  constructor(
    public form: FormBuilder,
    private driver_serv: CreateDriverServiceService,
    private router: Router
  ) {
    this.driverForm = this.form.group({
      fName: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(8)]],
      gender: ['', Validators.required],
      special: ['', Validators.required],
      languages: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      postal: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      companyName: ['', Validators.required],
      companyAddress: ['', Validators.required],
      companyPhone: ['', Validators.required],
      countryOrigin: ['', Validators.required],
      cars: ['', Validators.required],
      hoursAvailable: ['', Validators.required],
    });
  }

  ngOnInit() {}

  public create_account() {
    this.isSubmitted = true;
    if (!this.driverForm.valid) {
      return false;
    } else {
      console.log(this.driverForm.value);
    }
    //this.router.navigate(['/form-professional']);
  }

  get errorControl() {
    return this.driverForm.controls;
  }
}
