import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';
import { CustomTranslateService } from '../shared/services/custom-translate.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {
  language: string = this.customTranslateService.currentLang.value;

  constructor(
    private menuCtrl: MenuController,
    private customTranslateService: CustomTranslateService,
  ) { }

  ngOnInit() {
  }

  public openMenu() {
    this.menuCtrl.open();
    //this.statusBar.hide();
  }

  changeLanguage() {
    localStorage.setItem('old-lang', localStorage.getItem('lang')); // GUARDA O IDIOMA ANTERIOR
    localStorage.setItem('lang', this.language);
    this.customTranslateService.currentLang.next(this.language);
  }

}
