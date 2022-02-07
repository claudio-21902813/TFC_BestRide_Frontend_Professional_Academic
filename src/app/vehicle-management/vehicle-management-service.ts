import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable, pipe } from 'rxjs';
import { Vehicle } from './vehicle';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VehicleManagementService {
  private url_get_all_vehicles = '/getVehicleByEnterprise/';
  private url_delete_vehicle = '/deleteVehicle/';
  private url_get_vehicle = '/getVehicleById/'
  private url_update_vehicle = '/updateVehicle/';
  private url_create_vehicle: string = '/postVehicle';

  constructor(private http: HttpClient, private router: Router) {}

  public getAllVehicles(id): Observable<Vehicle> {
    return this.http
      .get<Vehicle>(environment.apiUrl + this.url_get_all_vehicles + id)
      .pipe(retry(2));
  }

  public deleteVehicle(id: any) {
        this.http
        .delete(environment.apiUrl + this.url_delete_vehicle + id)
        .subscribe(
            (response) =>
            console.log("Deleted Vehicle ID:" + id)
        )   
  }

  public getVehicle(id: any): Observable<Vehicle> {
    return this.http
      .get<Vehicle>(environment.apiUrl + this.url_get_vehicle + id)
      .pipe(retry(2));
  }

  public updateVehicle(data: any, id: any) {
        this.http
        .put(environment.apiUrl + this.url_update_vehicle + id, data)
        .subscribe(
            (response) => {
                console.log("Vehicle Edited")
            }
        )
  }

  public createVehicle(data: any) {
    this.http
      .post(environment.apiUrl + this.url_create_vehicle, data)
      .subscribe((response) => {});
  }

}
