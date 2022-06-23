import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController} from '@ionic/angular';
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
    public toastController: ToastController,
  ) { }

  ngOnInit() {
  }

  public openMenu() {
    this.menuCtrl.open();
    //this.statusBar.hide();
  }

  async presentToast() {
    let toast_language: string;
    switch(this.language) {
      case 'pt': {
        toast_language = 'Portuguese';
        break;
      }
      case 'en': {
        toast_language = 'English';
        break;
      }
      case 'es': {
        toast_language = 'Spanish';
        break;
      }
      case 'fr': {
        toast_language = 'French';
        break;
      }
      case 'ru': {
        toast_language = 'Russian';
        break;
      }
      case 'it': {
        toast_language = 'Italian';
        break;
      }
    }
    const toast = await this.toastController.create({
      message: 'Language changed to: ' + toast_language,
      duration: 2500,
      
    });
    toast.present();
  }

  changeLanguage() {
    localStorage.setItem('old-lang', localStorage.getItem('lang')); // GUARDA O IDIOMA ANTERIOR
    localStorage.setItem('lang', this.language);
    this.customTranslateService.currentLang.next(this.language);
    this.presentToast()
  }

}
