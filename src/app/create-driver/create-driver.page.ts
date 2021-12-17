import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { DriverServiceService } from './driver-service.service';
import { CountryCode } from './countryCode';

@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.page.html',
  styleUrls: ['./create-driver.page.scss'],
})
export class CreateDriverPage implements OnInit {
  public driverForm: FormGroup;
  public isSubmitted = false;
  countryCode: Array<CountryCode>;

  /* Password */
  icon1 = 'eye-outline';
  show1 = false;

  icon2 = 'eye-outline';
  show2 = false;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private serviceDriver: DriverServiceService
  ) {}

  ngOnInit() {
    this.driverForm = this.formBuilder.group(
      {
        fName: ['teste', Validators.required],
        email: [
          'as@gmail.com',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          ],
        ],
        password: ['abcabc123', [Validators.required, Validators.minLength(8)]],
        passwordConfirm: [
          'abcabc123',
          [Validators.required, Validators.minLength(8)],
        ],
        birth: ['', Validators.required],
        gender: ['', Validators.required],
        special: ['', Validators.required],
        languages: ['', Validators.required],
        p_ind: ['', Validators.required],
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
        hoursAvailableSince: ['', Validators.required],
        hoursAvailableUntil: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );

    this.serviceDriver.getCountryCode().subscribe((res) => {
      this.countryCode = res;
    });
  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['password'].value ===
      frm.controls['passwordConfirm'].value
      ? null
      : { mismatch: true };
  }

  togglepassword() {
    this.show1 = !this.show1;
    this.icon1 = this.show1 ? 'eye-off-outline' : 'eye-outline';
  }

  toggleConfirmPassword() {
    this.show2 = !this.show2;
    this.icon2 = this.show2 ? 'eye-off-outline' : 'eye-outline';
  }

  public submitForm() {
    this.isSubmitted = true;
    if (!this.driverForm.valid) {
      return false;
    } else {
      let data_FirstPage: NavigationExtras = {
        queryParams: {
          email: '' + this.driverForm.get('email').value,
          password: '' + this.driverForm.get('password').value,
          name: '' + this.driverForm.get('fName').value,
          dob: '' + this.driverForm.get('birth').value,
          gender: '' + this.driverForm.get('gender').value,
          adress: '' + this.driverForm.get('address').value,
          city: '' + this.driverForm.get('city').value,
          PostalCode: '' + this.driverForm.get('postal').value,
          Country: '' + this.driverForm.get('country').value,
          Phone:
            '' +
            this.driverForm.get('p_ind').value +
            '' +
            this.driverForm.get('phone').value,
        },
      };
      this.router.navigate(['/form-professional'], data_FirstPage);
    }
  }

  get errorControl() {
    return this.driverForm.controls;
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.driverForm.get('birth').setValue(date, {
      onlyself: true,
    });
  }
}
