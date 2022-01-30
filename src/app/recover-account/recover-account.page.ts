import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-account',
  templateUrl: './recover-account.page.html',
  styleUrls: ['./recover-account.page.scss'],
})
export class RecoverAccountPage implements OnInit {
  public recoverEmail: FormGroup;
  public isSubmittedEmail = false;
  public page = 'email';

  constructor(private fb: FormBuilder) {}

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
      this.page = 'code';
      this.recoverEmail.get('code').setValidators([Validators.required]);
      console.log(this.recoverEmail.value);
    }
  }
}
