import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { CompanyServiceService } from '../company-account/company-service.service';
import { AuthenticationService } from '../services/authentication.service';
import { AlertPopup } from '../shared/services/alert-popup';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  public password_type = false;
  public loginForm: FormGroup;
  public isSubmitted = false;

  public colors = ['#ffba00', '#00adff', '#58a600', '#ff3f00'];
  public color_content = '';

  constructor(
    public form: FormBuilder,
    private router: Router,
    private alert: AlertPopup,
    private authService: AuthenticationService,
    private menuCtrl: MenuController,
    private loginSvs: LoginServiceService,
    private cmpSvc: CompanyServiceService
  ) {
    const random = Math.floor(Math.random() * this.colors.length);
    this.color_content = this.colors[random];

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

      this.loginSvs.getCompanyId(email).subscribe((res) => {
        localStorage.setItem('userID', res[0].idEmpresaDriver);
      });

      const loginData = {
        email: email,
        password: pass,
      };
      this.loginSvs.login(loginData);
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
