import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public hide_tab: boolean = true;
  public activeIndex;
  any;
  public activePageTitle = 'Dashboard';
  public Pages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'albums',
    },
    {
      title: 'Create Tour',
      url: '/tour-form',
      icon: 'albums',
    },
  ];

  constructor(private statusBar: StatusBar, private plataform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.plataform.ready().then(() => {
      this.statusBar.styleDefault();
    });
  }
}
