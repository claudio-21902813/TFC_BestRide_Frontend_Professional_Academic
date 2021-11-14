import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-choise',
  templateUrl: './user-choise.page.html',
  styleUrls: ['./user-choise.page.scss'],
})
export class UserChoisePage implements OnInit {
  constructor(private comp: AppComponent, private router: Router) {
    this.comp.hide_tab = false;
  }

  ngOnInit() {}

  public navigateTo(page: string): void {
    this.router.navigate(['/' + page]);
  }
}
