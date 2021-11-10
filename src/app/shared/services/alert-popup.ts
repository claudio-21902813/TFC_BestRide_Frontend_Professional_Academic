import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CustomTranslateService } from './custom-translate.service';

@Injectable({
  providedIn: 'root',
})
export class AlertPopup {
  constructor(
    private alertCtrl: AlertController,
    private translate: CustomTranslateService
  ) {}

  async presentAlert(header: string, msg: string, button: string) {
    const header_trans = await this.translate.translateText(header).toPromise();
    const msg_trans = await this.translate.translateText(msg).toPromise();
    const button_trans = await this.translate.translateText(button).toPromise();

    const alert = await this.alertCtrl.create({
      header: '' + (await header_trans['translated_text']),
      message: '' + (await msg_trans['translated_text']),
      buttons: ['' + (await button_trans['translated_text'])],
    });

    await alert.present();
  }
}
