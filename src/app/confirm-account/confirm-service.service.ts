import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfirmServiceService {
  private url_confirm_enterprise = '/verifyAccountDriverEnterprise/';
  private url_resendCode = '/resend_codeDriverEnterprise/';

  constructor(private http: HttpClient, private router: Router) {}

  public confirmEnterpriseAccount(data: any) {
    this.http
      .post(environment.apiUrl + this.url_confirm_enterprise, data)
      .subscribe(
        (res) => {
          console.log(res);
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
