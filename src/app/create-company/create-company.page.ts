import { Component, ContentChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
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
    private companyService: CompanyServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.companyForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }

  public submitForm() {
    this.submited = true;
    if (!this.companyForm.valid) {
      return false;
    } else {
      this.router.navigate(['/create-company-form']);
      //this.companyService.createCompany(companyData);
    }
  }

  get errorControl() {
    return this.companyForm.controls;
  }
}
