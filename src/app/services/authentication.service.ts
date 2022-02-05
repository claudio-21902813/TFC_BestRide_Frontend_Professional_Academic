import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthenticationService {
  authState = new BehaviorSubject(false);

  constructor(private router: Router, private platform: Platform) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  ifLoggedIn() {
    const item = localStorage.getItem('accountRole');
    if (item) {
      this.authState.next(true);
    }
  }

  login() {
    const item = localStorage.getItem('accountRole');
    if (item) {
      this.router.navigate(['home']);
      this.authState.next(true);
    }
  }

  logout() {
    localStorage.removeItem('accountRole');
    this.router.navigate(['login']);
    this.authState.next(false);
    console.log("Logout")
  }

  isAuthenticated() {
    return this.authState.value;
  }
}
