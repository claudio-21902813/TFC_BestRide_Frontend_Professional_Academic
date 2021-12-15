import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../services/authentication.service';
import { AlertPopup } from '../shared/services/alert-popup';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  private login_url = '/loginEnterprise/';

  constructor(
    private http: HttpClient,
    private router: Router,
    private alert: AlertPopup,
    private authService: AuthenticationService
  ) {}

  public login(data: any) {
    this.http.post(environment.apiUrl + this.login_url, data).subscribe(
      (res) => {
        // save acess token
        localStorage.setItem('token', res['AuthenticationResult'].AccessToken);
        //navigate home
        console.log(res);

        localStorage.setItem('accountRole', 'company');
        this.authService.login();
      },
      (e) => {
        console.log(e);
        this.alert.presentAlert('Login Failed', e.error, 'Try Again');
      }
    );
  }
}
