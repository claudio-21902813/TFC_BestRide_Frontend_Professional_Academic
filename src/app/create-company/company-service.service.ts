import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CountryCode } from './create-company-form/countryCode';
@Injectable({
  providedIn: 'root',
})
export class CompanyServiceService {
  private url_create_company: String = '/create_driverEmpresa/';

  constructor(private http: HttpClient, private router: Router) {}

  public createCompany(data: any) {
    console.log(data);
    this.http
      .post(environment.apiUrl + this.url_create_company, data)
      .subscribe((response) => {
        // type of account is company
        localStorage.setItem('accountRole', 'company');
        //navigate Home
        this.router.navigate(['/home']);
      }),
      (err) => {
        console.log(err);
      };
  }

  public getCountryCode(): Observable<CountryCode[]> {
    return this.http.get<CountryCode[]>('./../assets/countryCodes.json');
  }
}
