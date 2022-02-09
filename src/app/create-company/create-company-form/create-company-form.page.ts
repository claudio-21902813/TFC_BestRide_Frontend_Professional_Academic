import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';
import { CompanyServiceService } from '../company-service.service';
import { Country } from './country';
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
  public countryList: Array<Country>;
  private email: any;

  /* Password */
  public hide = true;
  public hide2 = true;

  public current_year = new Date().getFullYear();

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
        rnat_1: ['', Validators.required],
        rnat_2: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        address: ['', Validators.required],
        city: ['', Validators.required],
        pcode: ['', Validators.required],
        country: ['Portugal', Validators.required],
        p_ind: ['+351', Validators.required],
        phone: ['', Validators.required],
        nif: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        pass: ['', [Validators.required, Validators.minLength(8)]],
        passConfirm: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );

    this.srvc.getCountryCode().subscribe((res) => {
      this.countryCode = res;
    });
    this.srvc.getCountryList().subscribe((res) => {
      this.countryList = res;
    });
  }

  change(event: any) {
    this.companyGroup
      .get('rnat_1')
      .valueChanges.pipe(distinctUntilChanged())
      .subscribe((val) => {
        if (val.length == 5) {
          const prevElement = document.getElementById('code');
          prevElement.focus();
        }
      });
  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['pass'].value === frm.controls['passConfirm'].value
      ? null
      : { mismatch: true };
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
        nif: '' + this.companyGroup.get('nif').value,
        phone_number:
          this.companyGroup.get('p_ind').value +
          '' +
          this.companyGroup.get('phone').value,
      };
      console.log(form_data);

      this.srvc.getCompanyId(this.email).subscribe((res) => {
        console.log(res);
        localStorage.setItem('id', res[0].idEmpresaDriver);
      });

      this.srvc.createCompany(form_data);
    }
  }

  get errorControl() {
    return this.companyGroup.controls;
  }
}
