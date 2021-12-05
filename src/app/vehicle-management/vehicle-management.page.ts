import { Component, OnInit } from '@angular/core';
import {VehicleManagementService} from './vehicle-management-service'

@Component({
  selector: 'app-vehicle-management',
  templateUrl: './vehicle-management.page.html',
  styleUrls: ['./vehicle-management.page.scss'],
})
export class VehicleManagementPage implements OnInit {

  vehiclesData: any;

  constructor(
    private vehicleApi: VehicleManagementService,
  ) {
    this.vehiclesData = [];
  }

  ngOnInit() {
      this.vehiclesData = this.vehicleApi.getAllVehicles;
  }

  public deleteVehicle() {
    //this.vehicleApi.deleteVehicle(id);
  }

}
