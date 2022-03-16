import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CreateVehiclePage } from './create-vehicle/create-vehicle.page';
import { VehicleEditPage } from './vehicle-edit/vehicle-edit.page';
import { VehicleManagementService } from './vehicle-management-service';

@Component({
  selector: 'app-vehicle-management',
  templateUrl: './vehicle-management.page.html',
  styleUrls: ['./vehicle-management.page.scss'],
})
export class VehicleManagementPage implements OnInit {
  public vehiclesData: any;
  public vehicleSearchTerm: string = '';
  public backupItems: any[];
  public isDraftedVehicle = true;

  constructor(
    private vehicleApi: VehicleManagementService,
    private modalController: ModalController,
    private router: Router
  ) {
    this.vehiclesData = [];
  }

  ngOnInit() {
    this.loadDataFromAPI();
  }

  ionViewDidEnter() {
    this.loadDataFromAPI();
  }

  private loadDataFromAPI() {
    this.vehicleApi
      .getAllVehicles(localStorage.getItem('userID'))
      .subscribe((response) => {
        this.vehiclesData = response;
        this.backupItems = this.vehiclesData;
      });
  }

  async openCreatePage() {
    this.router.navigate(['/create-vehicle']);
  }

  async openEditPage(id) {
    const modal2 = await this.modalController.create({
      component: VehicleEditPage,
      componentProps: {
        idVehicle: id,
      },
    });
    await modal2.present();

    await modal2.onDidDismiss();
  }

  ionViewWillEnter() {
    this.vehicleApi
      .getAllVehicles(localStorage.getItem('userID'))
      .subscribe((response) => {
        this.vehiclesData = response;
        this.backupItems = this.vehiclesData;
      });
  }

  search() {
    if (this.vehicleSearchTerm != '') {
      this.vehiclesData = this.vehiclesData.filter((res) => {
        return res.title
          .toLocaleLowerCase()
          .match(this.vehicleSearchTerm.toLocaleLowerCase());
      });
    } else if (this.vehicleSearchTerm == '') {
      this.vehiclesData = this.backupItems;
    }
  }

  public deleteVehicle(id: any, index: any) {
    this.vehiclesData.splice(index, 1);
    this.backupItems = this.vehiclesData;
    this.vehicleApi.deleteVehicle(Number(id));
  }
}
