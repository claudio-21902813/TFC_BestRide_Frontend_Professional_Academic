import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateCompanyDriverPage } from './create-company-driver/create-company-driver.page';
import { Driver } from './driver';

@Component({
  selector: 'app-driver-management',
  templateUrl: './driver-management.page.html',
  styleUrls: ['./driver-management.page.scss'],
})
export class DriverManagementPage implements OnInit {
  public driverSearchTerm: string = '';
  public driversData: Array<Driver> = [
    {
      name: 'driver Claudio',
      phone: '123432123',
    },
    {
      name: 'driver Pedro',
      phone: '123432123',
    },
    {
      name: 'driver Diogo',
      phone: '123432123',
    },
    {
      name: 'driver Rui',
      phone: '123432123',
    },
  ];
  public backupItems = this.driversData;

  constructor(private modalCtrl: ModalController) {
    //this.driversData = [];
  }

  ngOnInit() {}

  search() {
    if (this.driverSearchTerm != '') {
      this.driversData = this.driversData.filter((res) => {
        return res.name
          .toLocaleLowerCase()
          .match(this.driverSearchTerm.toLocaleLowerCase());
      });
    } else if (this.driverSearchTerm == '') {
      this.driversData = this.backupItems;
    }
  }

  public async openCreateDriverModel() {
    const modal = await this.modalCtrl.create({
      component: CreateCompanyDriverPage,
    });
    await modal.present();
  }
}
