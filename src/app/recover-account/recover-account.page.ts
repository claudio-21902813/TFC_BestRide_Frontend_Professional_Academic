import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecoverAccountServiceService } from './recover-account-service.service';

@Component({
  selector: 'app-recover-account',
  templateUrl: './recover-account.page.html',
  styleUrls: ['./recover-account.page.scss'],
})
export class RecoverAccountPage implements OnInit {
  public recoverEmail: FormGroup;
  public isSubmittedEmail = false;
  public counter = 0;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private service: RecoverAccountServiceService
  ) {}

  ngOnInit() {
    this.recoverEmail = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      code: [''],
      password: [''],
      new_password: [''],
    });
  }

  get errorControl() {
    return this.recoverEmail.controls;
  }

  public submitEmailForm() {
    this.isSubmittedEmail = true;
    if (!this.recoverEmail.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      this.counter++;
      console.log(this.counter);
      if (this.counter == 1) {
        this.recoverEmail.get('code').setValidators([Validators.required]);
        console.log(this.recoverEmail.value);
        this.service.recoverAccount();
      } else if (this.counter == 2) {
        this.recoverEmail.get('password').setValidators([Validators.required]);
        this.recoverEmail
          .get('new_password')
          .setValidators([Validators.required]);
        console.log('recover account');
      } else if (this.counter == 3) {
        console.log('done!!');
      }
    }
  }
}
