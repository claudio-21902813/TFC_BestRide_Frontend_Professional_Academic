import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  public password_type = false;
  public loginForm: FormGroup;
  public isSubmitted = false;

  constructor(public form: FormBuilder, private router: Router) {
    this.loginForm = this.form.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  get errorControl() {
    return this.loginForm.controls;
  }

  public submitForm() {
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.loginForm.value);
      const email = this.loginForm.get('email').value;
      const pass = this.loginForm.get('password').value;
      if (email == 'driver@best' && pass == 'abc123') {
        this.router.navigate(['./home']);
      }
    }
  }

  public togglePasswordMode() {
    this.password_type = !this.password_type;
  }

  public navigateScreen(name: string): void {
    this.router.navigate(['/' + name]);
  }

  public socialLogin(type: string) {}
}
