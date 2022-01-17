import { Component, OnInit } from '@angular/core';
import { VehicleManagementService } from './vehicle-management-service';

@Component({
  selector: 'app-vehicle-management',
  templateUrl: './vehicle-management.page.html',
  styleUrls: ['./vehicle-management.page.scss'],
})
export class VehicleManagementPage implements OnInit {
  vehiclesData: any;
  public vehicleSearchTerm: string = '';

  public backupItems: any[];

  constructor(
    private vehicleApi: VehicleManagementService) {
    this.vehiclesData = [];
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.vehicleApi.getAllVehicles(localStorage.getItem("id")).subscribe(response => {
      console.log(response);
      this.vehiclesData = response;
      this.backupItems = this.vehiclesData;
    });

  }

  filterItems(searchTerm) {
    return this.vehiclesData.filter((item) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  setFilteredItems() {
    if (this.vehicleSearchTerm && this.vehicleSearchTerm.trim() != '') {
      this.vehiclesData = this.filterItems(this.vehicleSearchTerm);
    } else {
      this.vehiclesData = this.backupItems;
    }
  }

  public deleteVehicle() {
    //this.vehicleApi.deleteVehicle(id);
  }
}
