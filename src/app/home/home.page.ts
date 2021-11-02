import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public slideOpts = {
    initialSlide: 1,
    speed: 300,
    effect: 'flip',
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  public navigate(page: string) {
    this.router.navigate(['/' + page]);
  }
}
