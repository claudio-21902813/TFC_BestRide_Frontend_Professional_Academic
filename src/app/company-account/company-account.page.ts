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
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      name: ['', Validators.required],
      rnat: ['', Validators.required],
      address: ['', Validators.required],
      locale: ['', Validators.required],
      postal_code: ['', Validators.required],
      country: ['', Validators.required],
      phone_number: ['', Validators.required],
      nif: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
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
    this.companySvc.getData(localStorage.getItem('token')).subscribe(
      (resp) => {
        //password do backend
        console.log(resp);
        this.formPut('email', resp['UserAttributes'][11].Value);
        this.formPut('name', resp['UserAttributes'][8].Value);
        this.formPut('rnat', resp['UserAttributes'][5].Value);
        this.formPut('address', resp['UserAttributes'][2].Value);
        this.formPut('locale', resp['UserAttributes'][6].Value);
        this.formPut('postal_code', resp['UserAttributes'][10].Value);
        this.formPut('country', resp['UserAttributes'][1].Value);
        this.formPut('phone_number', resp['UserAttributes'][9].Value);
        this.formPut('nif', resp['UserAttributes'][7].Value);
        //
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editSubmit() {
    this.submited = true;
    if (!this.companyEditForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      const token = localStorage.getItem('token');
      const data = {
        //falta password do backend
        email: this.companyEditForm.get('email').value,
        name: this.companyEditForm.get('name').value,
        rnat: this.companyEditForm.get('rnat').value,
        address: this.companyEditForm.get('address').value,
        locale: this.companyEditForm.get('locale').value,
        postalcode: this.companyEditForm.get('postal_code').value,
        country: this.companyEditForm.get('country').value,
        phone_number: this.companyEditForm.get('phone_number').value,
        nif: this.companyEditForm.get('nif').value,
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
