import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-account',
  templateUrl: './company-account.page.html',
  styleUrls: ['./company-account.page.scss'],
})
export class CompanyAccountPage implements OnInit {
  public companyEditForm: FormGroup;
  public submited = false;
  public comp = [
    {
      control: 'email',
      type: 'email',
      error: 'Email is required',
    },
    {
      control: 'name',
      type: 'text',
    },
    {
      control: 'nif',
      type: 'number',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.companyEditForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      name: ['', [Validators.required, Validators.minLength(7)]],
      nif: ['', Validators.required],
    });
  }

  ngOnInit() {}

  editSubmit() {
    this.submited = true;
    if (!this.companyEditForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.companyEditForm.value);
    }
  }

  get errorControl() {
    return this.companyEditForm.controls;
  }
}
