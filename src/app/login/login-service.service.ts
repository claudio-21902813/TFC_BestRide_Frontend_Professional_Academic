import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  private login_url = '/loginEnterprise/';

  constructor(private http: HttpClient, private router: Router) {}

  public login(data: any) {
    this.http
      .post(environment.apiUrl + this.login_url, data)
      .subscribe((res) => {
        console.log(res);
      }),
      (err) => {
        console.log(err);
      };
  }
}
