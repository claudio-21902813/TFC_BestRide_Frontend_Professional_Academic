import { Component, OnInit} from '@angular/core';
import { ModalController} from '@ionic/angular';
import { CreateVehiclePage } from './create-vehicle/create-vehicle.page';
import { VehicleEditPage } from './vehicle-edit/vehicle-edit.page';
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
    private modalController: ModalController,
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

  async openEditPage(id) {
    const modal2 = await this.modalController.create({
      component: VehicleEditPage,
      componentProps: { 
        idVehicle: id,
      }
    });
    await modal2.present();

    await modal2.onDidDismiss();
    console.log('closed');

    //tem que ter timeout para atualizar bem a lista, sem timeout fica tudo igual
    setTimeout(() => 
    this.vehicleApi
      .getAllVehicles(localStorage.getItem('userID'))
      .subscribe((response) => {
        this.vehiclesData = response;
        this.backupItems = this.vehiclesData;
      })
    ,1000);

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

  public deleteVehicle(id: any, index: any) {
    this.vehiclesData.splice(index, 1);
    this.backupItems = this.vehiclesData;
    this.vehicleApi.deleteVehicle(Number(id));
    
  }
}
