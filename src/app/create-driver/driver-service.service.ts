import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DriverServiceService {
  private url_create_driver: string = '/postDriver/';
  private url_create_contact: string = '/postEmergencyContact/';

  constructor(private http: HttpClient, private router: Router) {}

  public create_emergency(data: any): void {
    this.http
      .post(environment.apiUrl + this.url_create_contact, data)
      .subscribe((response) => {
        console.log(response);
      }),
      (err) => {
        console.log(err);
      };
  }

  public create_contact(data: any) {
    const data_form = {
      email: data['first_page'].email,
      specialNeedSupport: data['first_page'].specialNeedSupport,
      languages: data['first_page'].languages[0],
      vehiclesCanDrive: data['first_page'].vehiclesCanDrive[0],
      availableHours: data['first_page'].availableHours,
      image: 'exemplo.png',
      courseTaken: data['second_page'].course,
      emergencyContact_id: 1,
      typeGuide: data['second_page'].driver_type,
      about: data['second_page'].about,
      video: data['second_page'].video,
      startActivity: data['second_page'].activity_start,
    };
    this.http
      .post(environment.apiUrl + this.url_create_driver, data_form)
      .subscribe((response) => {
        // type of account is company
        localStorage.setItem('accountRole', 'driver');
        //navigate Home
        this.router.navigate(['/home']);
      }),
      (err) => {
        console.log(err);
      };
  }
}
