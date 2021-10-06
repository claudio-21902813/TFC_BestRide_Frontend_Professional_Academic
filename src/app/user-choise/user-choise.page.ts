import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-user-choise',
  templateUrl: './user-choise.page.html',
  styleUrls: ['./user-choise.page.scss'],
})
export class UserChoisePage implements OnInit {
  constructor(private comp: AppComponent) {
    this.comp.hide_tab = false;
  }

  ngOnInit() {}
}
