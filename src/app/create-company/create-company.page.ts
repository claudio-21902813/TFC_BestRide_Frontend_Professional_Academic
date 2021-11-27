import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyServiceService } from './company-service.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.page.html',
  styleUrls: ['./create-company.page.scss'],
})
export class CreateCompanyPage implements OnInit {
  companyForm: FormGroup;
  submited = false;

  constructor(
    public formBuilder: FormBuilder,
    private companyService: CompanyServiceService
  ) {}

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
      const companyData = {
        name: this.companyForm.get('name').value,
        phone:
          this.companyForm.get('phoneIndex').value +
          this.companyForm.get('phone').value,
      };
      this.companyService.createCompany(companyData);
    }
  }

  get errorControl() {
    return this.companyForm.controls;
  }
}
