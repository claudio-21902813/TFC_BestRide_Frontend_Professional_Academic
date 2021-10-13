import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class CreateDriverServiceService {
  private create_url = '/create_driver/';

  constructor(private http: HttpClient, private toastCtrl: ToastController) {}

  public create_driver_account(data: any): void {
    this.http.post(environment.apiUrl + this.create_url, data).subscribe(
      (res) => {
        console.log(res);
        this.showToast('Your Account was Created !', 'success');
      },
      (err) => {
        console.log(err);
        this.showToast('Error!', 'danger');
      }
    );
  }

  async showToast(msg: string, color: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color: color,
    });
    toast.present();
  }
}
