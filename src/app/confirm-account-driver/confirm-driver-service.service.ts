import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDriverServiceService {
  private url_confirm_driver = '/verifyAccountDriver/';
  private url_resendCode = '/resend_codeDriver/';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  public confirmDriverAccount(data: any) {
    this.http
      .post(environment.apiUrl + this.url_confirm_driver, data)
      .subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('accountRole', 'driver');
          this.authService.login();
          this.router.navigate(['/home']);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  public resendCodeAccount(data: any) {
    this.http.post(environment.apiUrl + this.url_resendCode, data).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
