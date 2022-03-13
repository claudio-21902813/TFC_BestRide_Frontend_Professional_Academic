import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  public activeIndex;
  public activePageTitle = 'Home';
  public pages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'Home-White.svg',
    },
    {
      title: 'Tour management',
      url: '/tour-management',
      icon: 'Tour Management-White.svg',
    },
    {
      title: 'Driver management',
      url: '/driver-management',
      icon: 'Driver Management-White.svg',
    },
    {
      title: 'Vehicle management',
      url: '/vehicle-management',
      icon: 'Vehicle Management-White.svg',
    },
    {
      title: 'Statistics',
      url: '/statistics',
      icon: 'Statistics-White.svg',
    },
    /* {
      title: 'Driver Account',
      url: '/account-driver',
      icon: 'car',
    },*/
    {
      title: 'Company Account',
      url: '/company-account',
      icon: 'Company Account-White.svg',
    },
    {
      title: 'App Settings',
      url: '/options',
      icon: 'Settings-White.svg',
    },
  ];
  constructor(public menu: MenuController, private router: Router) {}

  ngOnInit() {}

  closeMenu() {
    this.menu.close();
  }
}
