import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.page.html',
  styleUrls: ['./create-company.page.scss'],
})
export class CreateCompanyPage implements OnInit {
  companyForm: FormGroup;
  submited = false;

  constructor(public formBuilder: FormBuilder) {}


  ngOnInit() {
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      phoneIndex: ['', Validators.required],
    });
  }

  public submitForm() {
    this.submited = true;
    if (!this.companyForm.valid) {
      return false;
    } else {
      console.log(this.companyForm.value);
    }
  }

  get errorControl() {
    return this.companyForm.controls;
  }
}
