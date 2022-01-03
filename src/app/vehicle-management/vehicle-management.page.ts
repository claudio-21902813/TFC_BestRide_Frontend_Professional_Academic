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
  public items: any = [
    { title: 'Veiculo 1' },
    { title: 'Veiculo 2' },
    { title: 'Veiculo 3' },
    { title: 'Veiculo 4' },
    { title: 'Veiculo 5' },
    { title: 'Veiculo 6' },
  ];

  constructor(private vehicleApi: VehicleManagementService) {
    this.vehiclesData = [];
  }

  ngOnInit() {
    this.backupItems = this.items;
    this.vehiclesData = this.vehicleApi.getAllVehicles;
  }

  filterItems(searchTerm) {
    return this.items.filter((item) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  setFilteredItems() {
    if (this.vehicleSearchTerm && this.vehicleSearchTerm.trim() != '') {
      this.items = this.filterItems(this.vehicleSearchTerm);
    } else {
      this.items = this.backupItems;
    }
  }

  public deleteVehicle() {
    //this.vehicleApi.deleteVehicle(id);
  }
}
