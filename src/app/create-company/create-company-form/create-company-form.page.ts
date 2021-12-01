import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyServiceService } from '../company-service.service';
import { CountryCode } from './countryCode';

@Component({
  selector: 'app-create-company-form',
  templateUrl: './create-company-form.page.html',
  styleUrls: ['./create-company-form.page.scss'],
})
export class CreateCompanyFormPage implements OnInit {
  companyGroup: FormGroup;
  submited = false;
  countryCode: Array<CountryCode>;

  /* Password */
  icon1 = 'eye-outline';
  show1 = false;

  icon2 = 'eye-outline';
  show2 = false;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private srvc: CompanyServiceService
  ) {}

  ngOnInit() {
    this.companyGroup = this.formBuilder.group({
      email: ['', Validators.required],
      pass: ['', Validators.required],
      passConfirm: ['', Validators.required],
    });

    this.srvc.getCountryCode().subscribe((res) => {
      this.countryCode = res;
    });
  }

  passwordConfirming(c: AbstractControl): {
    invalid: boolean;
  } {
    if (c.get('pass').value !== c.get('passConfirm').value) {
      return {
        invalid: true,
      };
    }
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
    this.submited = true;
    if (!this.companyGroup.valid) {
      return false;
    } else {
      //this.companyService.createCompany(companyData);
      this.router.navigate(['/confirm-account']);
    }
  }

  get errorControl() {
    return this.companyGroup.controls;
  }
}
