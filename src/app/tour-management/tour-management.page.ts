import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateTourPage } from './create-tour/create-tour.page';

@Component({
  selector: 'app-tour-management',
  templateUrl: './tour-management.page.html',
  styleUrls: ['./tour-management.page.scss'],
})
export class TourManagementPage implements OnInit {
  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}

  public async openModalCreateTour() {
    const modal = await this.modalCtrl.create({
      component: CreateTourPage,
    });
    return await modal.present();
  }
}
