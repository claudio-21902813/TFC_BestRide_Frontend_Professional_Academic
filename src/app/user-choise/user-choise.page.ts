import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-user-choise',
  templateUrl: './user-choise.page.html',
  styleUrls: ['./user-choise.page.scss'],
})
export class UserChoisePage implements OnInit {
  constructor(
    private comp: AppComponent,
    private router: Router,
    private menuCtrl: MenuController
  ) {
    this.comp.hide_tab = false;
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  public navigateTo(page: string): void {
    this.router.navigate(['/' + page]);
  }
}
