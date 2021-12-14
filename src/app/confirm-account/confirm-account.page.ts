import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmServiceService } from './confirm-service.service';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.page.html',
  styleUrls: ['./confirm-account.page.scss'],
})
export class ConfirmAccountPage implements OnInit {
  confirmForm: FormGroup;
  submited = false;

  constructor(
    public formBuilder: FormBuilder,
    private svc: ConfirmServiceService
  ) {}

  ngOnInit() {
    this.confirmForm = this.formBuilder.group({
      code: ['', Validators.required],
    });
  }

  public submitForm() {
    this.submited = true;
    if (!this.confirmForm.valid) {
      return false;
    } else {
      const data = {
        email: '' + localStorage.getItem('email'),
        code: '' + this.confirmForm.get('code').value,
      };
      console.log(this.confirmForm.get('code').value);

      this.svc.confirmEnterpriseAccount(data);
    }
  }

  public resendCode() {
    this.svc.resendCodeAccount('' + localStorage.getItem('email'));
  }

  get errorControl() {
    return this.confirmForm.controls;
  }
}
