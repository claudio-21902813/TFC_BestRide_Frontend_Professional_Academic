import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable} from 'rxjs';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root',
})

export class VehicleManagementService {
    private url_get_all_vehicles = "";
    private url_delete_vehicle = "";
    private url_update_vehicle = "";

    constructor(private http: HttpClient, private router: Router) {}

    public getAllVehicles(): Observable<Vehicle> {

        return this.http
        .get<Vehicle>(environment.apiUrl + this.url_get_all_vehicles)
    }

    public deleteVehicle(id: any) {
        /**
        this.http
        .post(environment.apiUrl + this.url_delete_vehicle, id)
        .subscribe(
            (response) =>
            this.router.navigate(['/vehicle-management'])
        )
        */
    }

    public updateVehicle(id, data: any) {
        /**
        this.http
        .put(environment.apiUrl + this.url_update_vehicle, id, data)
        .subscribe(
            (response) => {
                this.router.navigate(['/vehicle-management'])
            }
        )
        */
    }
}