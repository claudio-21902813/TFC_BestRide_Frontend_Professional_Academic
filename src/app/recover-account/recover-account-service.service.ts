import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AlertPopup } from '../shared/services/alert-popup';
import { Router } from '@angular/router';
import {retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecoverAccountServiceService {
  private recover_url: String = '/recoverDriverEnterprise/';
  private url_confirm_account: String = '/confirmRecoverDriverEnterprise/';

  constructor(private http: HttpClient,
     private alert: AlertPopup,
     private router: Router) {}

  public recoverAccount(email: String): void {
    let postData = {
      email: email,
    };
    this.http
      .post(environment.apiUrl + this.recover_url, postData)
      .subscribe((res) => {
        console.log(res);
      }),
      (err) => {
        console.log(err);
        this.alert.presentAlert(
          'Error',
          'An error ocurred during the process',
          'Try Again'
        );
      };
  }

  public codeVerification(code: String, pass: String, email: String): void {
    let postData = {
      email: email,
      code: code,
      password: pass,
    };

    this.http
      .post(environment.apiUrl + this.url_confirm_account, postData)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/login']);
        },
        (err) => {
          console.log(err);
          this.alert.presentAlert(
            'Error',
            'Code Mismatch',
            'Try Again',
          );
        }
      );
  }

}
