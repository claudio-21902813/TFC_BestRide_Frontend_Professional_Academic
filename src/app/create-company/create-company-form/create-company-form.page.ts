import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  private email: any;

  /* Password */
  icon1 = 'eye-outline';
  show1 = false;

  icon2 = 'eye-outline';
  show2 = false;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private srvc: CompanyServiceService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.email) {
        this.email = params.email;
      }
    });
  }

  ngOnInit() {
    this.companyGroup = this.formBuilder.group(
      {
        name: ['', Validators.required],
        rnat: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        pcode: ['', Validators.required],
        country: ['', Validators.required],
        p_ind: ['', Validators.required],
        phone: ['', Validators.required],
        pass: ['', [Validators.required, Validators.minLength(8)]],
        passConfirm: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );

    this.srvc.getCountryCode().subscribe((res) => {
      this.countryCode = res;
    });
  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['pass'].value === frm.controls['passConfirm'].value
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
    this.submited = true;
    if (!this.companyGroup.valid) {
      return false;
    } else {
      const form_data = {
        email: '' + this.email,
        password: '' + this.companyGroup.get('pass').value,
        name: '' + this.companyGroup.get('name').value,
        address: '' + this.companyGroup.get('address').value,
        locale: '' + this.companyGroup.get('city').value,
        country: '' + this.companyGroup.get('country').value,
        postalcode: '' + this.companyGroup.get('pcode').value,
        nif: '',
        phone_number:
          this.companyGroup.get('p_ind').value +
          '' +
          this.companyGroup.get('phone').value,
      };
      //saving email
      localStorage.setItem('email', this.email);
      this.srvc.createCompany(form_data);
    }
  }

  get errorControl() {
    return this.companyGroup.controls;
  }
}
