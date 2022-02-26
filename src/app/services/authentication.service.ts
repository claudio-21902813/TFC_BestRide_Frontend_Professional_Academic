import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthenticationService {
  authState = new BehaviorSubject(false);

  constructor(private router: Router, private platform: Platform) {
    this.platform.ready().then(() => {
      this.isAuthenticated();
    });
  }

  login() {
    this.router.navigate(['home']);
    this.authState.next(true);
  }

  logout() {
    this.router.navigate(['login']);
    this.authState.next(false);
  }

  isAuthenticated() {
    return this.authState.value;
  }
}
