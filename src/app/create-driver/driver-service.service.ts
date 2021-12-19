import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CountryCode } from './countryCode';

@Injectable({
  providedIn: 'root',
})
export class DriverServiceService {
  private url_cognito_create: string = '/createDriver/';
  private url_create_contact: string = '/postEmergencyContact/';

  constructor(private http: HttpClient, private router: Router) {}

  public getCountryCode(): Observable<CountryCode[]> {
    return this.http.get<CountryCode[]>('./../assets/countryCodes.json');
  }
  

  public create_emergency(data: any): void {
    /*
    this.http
      .post(environment.apiUrl + this.url_create_contact, data)
      .subscribe((response) => {
        console.log(response);
      }),
      (err) => {
        console.log(err);
      };
      */
  }

  public create_contact(data: any) {
    const data_form = {
      email: data['first_page'].email,
      password: data['first_page'].password,
      name: data['first_page'].name,
      dob: data['first_page'].dob,
      gender: data['first_page'].gender,
      adress: data['first_page'].adress,
      city: data['first_page'].city,
      PostalCode: data['first_page'].PostalCode,
      Country: data['first_page'].Country,
      NIF: data['second_page'].nif,
      RNATLicense: data['second_page'].rnaat_l,
      DriverLicense: data['second_page'].driver_l,
      Phone: data['first_page'].Phone,
      Nationality: data['second_page'].nation,
      CitizenCard: data['second_page'].cc,
      ANCATNumber: data['second_page'].ancat_l,
      IBAN: data['second_page'].bank_iban,
      Image: data['second_page'].docImage,
    };
      this.http
      .post(environment.apiUrl + this.url_cognito_create, data_form)
      .subscribe((response) => {
        console.log(response);
        // type of account is driver
        localStorage.setItem('accountRole', 'driver');
        localStorage.setItem('email', data_form.email);
        this.router.navigate(['/confirm-account', {queryParams: {source: 'driver'}}]);
      }),
      (err) => {
        console.log(err);
      };
  }
}
