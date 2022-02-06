import { Component, OnInit } from '@angular/core';
import { Driver } from './driver';

@Component({
  selector: 'app-driver-management',
  templateUrl: './driver-management.page.html',
  styleUrls: ['./driver-management.page.scss'],
})
export class DriverManagementPage implements OnInit {
  public drivers: Array<Driver> = [
    {
      name: 'driver Claudio',
      phone: '123432123',
    },
    {
      name: 'driver Pedrito',
      phone: '123432123',
    },
    {
      name: 'driver Diogito',
      phone: '123432123',
    },
    {
      name: 'driver Rui',
      phone: '123432123',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
