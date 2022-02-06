import { Component, OnInit } from '@angular/core';
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

  constructor() {
    //this.driversData = [];
  }

  ngOnInit() {}

  filterItems(searchTerm) {
    return this.driversData.filter((item) => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  setFilteredItems() {
    if (this.driverSearchTerm && this.driverSearchTerm.trim() != '') {
      this.driversData = this.filterItems(this.driverSearchTerm);
    } else {
      this.driversData = this.backupItems;
    }
  }

}
