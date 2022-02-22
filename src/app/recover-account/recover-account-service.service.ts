import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AlertPopup } from '../shared/services/alert-popup';

@Injectable({
  providedIn: 'root',
})
export class RecoverAccountServiceService {
  private recover_url: String = '/recoverDriverEnterprise/';

  constructor(private http: HttpClient, private alert: AlertPopup) {}

  public recoverAccount() {
    this.http
      .post(environment.apiUrl + this.recover_url, {
        email: 'pedrocostaalves@live.c2om.pt',
      })
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
}
