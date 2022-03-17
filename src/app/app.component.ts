import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController, Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Company } from './company-account/company';
import { CompanyServiceService } from './company-account/company-service.service';
import { AuthenticationService } from './services/authentication.service';
import { CustomTranslateService } from './shared/services/custom-translate.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private statusBar: StatusBar,
    private plataform: Platform,
    private customTranslateService: CustomTranslateService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.plataform.ready().then(() => {
      this.statusBar.styleDefault();
      this.init();
      /* this.authenticationService.authState.subscribe((state) => {
        if (state) {
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['login']);
        }
      });*/
    });
  }

  private init(): void {
    if ('lang' in localStorage) {
      this.customTranslateService.currentLang.next(
        localStorage.getItem('lang')
      );
    } else {
      this.customTranslateService.currentLang.next('en');
    }
  }
}
