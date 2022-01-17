import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateVehiclePage } from './create-vehicle/create-vehicle.page';
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
    private vehicleApi: VehicleManagementService,
    private modalController: ModalController
  ) {
    this.vehiclesData = [];
  }

  ngOnInit() {}

  async openCreatePage() {
    const modal = await this.modalController.create({
      component: CreateVehiclePage,
    });
    await modal.present();

    await modal.onDidDismiss();
    console.log('closed');

    this.vehicleApi
      .getAllVehicles(localStorage.getItem('userID'))
      .subscribe((response) => {
        this.vehiclesData = response;
        this.backupItems = this.vehiclesData;
      });
  }

  ionViewWillEnter() {
    this.vehicleApi
      .getAllVehicles(localStorage.getItem('userID'))
      .subscribe((response) => {
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
