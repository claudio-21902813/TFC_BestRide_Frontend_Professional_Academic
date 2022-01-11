import { Component, ContentChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
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
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
    });
  }

  public submitForm() {
    this.submited = true;
    if (!this.companyForm.valid) {
      return false;
    } else {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          email: this.companyForm.get('email').value,
        },
      };
      this.router.navigate(['/create-company-form'], navigationExtras);
    }
  }

  get errorControl() {
    return this.companyForm.controls;
  }
}
