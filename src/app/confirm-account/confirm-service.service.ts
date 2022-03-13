import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { LoginServiceService } from '../login/login-service.service';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class ConfirmServiceService {
  private url_confirm_enterprise = '/verifyAccountDriverEnterprise/';
  private url_resendCode = '/resend_codeDriverEnterprise/';
  private url_confirm_driver = '/verifyAccountDriver/';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private loginSvc: LoginServiceService
  ) {}

  public confirmEnterpriseAccount(data: any) {
    this.http
      .post(environment.apiUrl + this.url_confirm_enterprise, data)
      .subscribe(
        (res) => {
          localStorage.setItem('accountRole', 'company');
          this.authService.login();

          const log_data = {
            email: localStorage.getItem('emailCache'),
            password: localStorage.getItem('passCache'),
          };
          this.loginSvc.login(log_data);

          // after login remove cache
          localStorage.removeItem('emailCache');
          localStorage.removeItem('passCache');

          this.router.navigate(['/home']);
        },
        (err) => {
          this.presentAlert();
        }
      );
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Invalid PIN code',
      buttons: ['Try Again'],
    });

    await alert.present();
  }

  public resendCodeAccount(data: any) {
    this.http.post(environment.apiUrl + this.url_resendCode, data).subscribe(
      (res) => {},
      (err) => {}
    );
  }

  public confirmDriverAccount(data: any) {
    this.http
      .post(environment.apiUrl + this.url_confirm_driver, data)
      .subscribe(
        (res) => {
          localStorage.setItem('accountRole', 'driver');
          this.authService.login();
          this.router.navigate(['/home']);
        },
        (err) => {}
      );
  }
}
