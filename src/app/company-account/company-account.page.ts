import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Company } from './company';
import { CompanyServiceService } from './company-service.service';

@Component({
  selector: 'app-company-account',
  templateUrl: './company-account.page.html',
  styleUrls: ['./company-account.page.scss'],
})
export class CompanyAccountPage implements OnInit {
  public companyEditForm: FormGroup;
  public submited = false;
  public cop: Company = {};
  public comp = [
    {
      control: 'email',
      label: 'Email',
      type: 'email',
      error: 'Email is required',
    },
    {
      label: 'Phone',
      control: 'phone',
      type: 'text',
    },
    {
      label: 'Address',
      control: 'address',
      type: 'text',
    },
    {
      label: 'Locale',
      control: 'locale',
      type: 'text',
    },
    {
      label: 'Postal',
      control: 'postal',
      type: 'text',
    },
    {
      label: 'Name',
      control: 'name',
      type: 'text',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private companySvc: CompanyServiceService,
    private alertController: AlertController
  ) {
    this.companyEditForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      locale: ['', Validators.required],
      postal: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(7)]],
    });
  }

  private async deleteAccountConfirm() {
    const alert = await this.alertController.create({
      header: 'Delete Account',
      message:
        'Do you want to delete the account? This operation is irreversible!.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            this.alertController.dismiss;
          },
        },
        {
          text: 'Confirm',
          handler: () => {
            this.companySvc.deleteCompanyAccount(localStorage.getItem('token'));
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  private formPut(control: string, val: string) {
    this.companyEditForm.get('' + control).setValue(val);
  }

  ngOnInit() {
    this.companyEditForm.disable();
    this.companySvc.getData(localStorage.getItem('token')).subscribe(
      (resp) => {
        console.log(resp);
        this.formPut('email', resp['UserAttributes'][9].Value);
        this.formPut('name', resp['UserAttributes'][4].Value);
        this.formPut('address', resp['UserAttributes'][2].Value);
        this.formPut('phone', resp['UserAttributes'][6].Value);
        this.formPut('locale', resp['UserAttributes'][7].Value);
        this.formPut('postal', resp['UserAttributes'][8].Value);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public editFields() {
    this.companyEditForm.disabled
      ? this.companyEditForm.enable()
      : this.companyEditForm.disable();
  }

  editSubmit() {
    this.submited = true;
    if (!this.companyEditForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      const token = localStorage.getItem('token');
      const data = {
        email: this.companyEditForm.get('email').value,
        name: this.companyEditForm.get('name').value,
        address: this.companyEditForm.get('address').value,
        phone: this.companyEditForm.get('phone').value,
        locale: this.companyEditForm.get('locale').value,
        postal: this.companyEditForm.get('postal').value,
      };
      this.companySvc.updateCompanyAccount(token, data);
    }
  }

  public deleteButton() {
    this.deleteAccountConfirm();
  }

  get errorControl() {
    return this.companyEditForm.controls;
  }
}
