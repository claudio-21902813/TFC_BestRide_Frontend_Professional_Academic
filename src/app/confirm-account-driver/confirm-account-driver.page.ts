import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmDriverServiceService } from './confirm-driver-service.service';

@Component({
  selector: 'app-confirm-account-driver',
  templateUrl: './confirm-account-driver.page.html',
  styleUrls: ['./confirm-account-driver.page.scss'],
})
export class ConfirmAccountDriverPage implements OnInit {
  confirmForm: FormGroup;
  submited = false;

  constructor(
    public formBuilder: FormBuilder,
    private svc: ConfirmDriverServiceService
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

      this.svc.confirmDriverAccount(data);
    }
  }

  public resendCode() {
    this.svc.resendCodeAccount('' + localStorage.getItem('email'));
  }

  get errorControl() {
    return this.confirmForm.controls;
  }
}