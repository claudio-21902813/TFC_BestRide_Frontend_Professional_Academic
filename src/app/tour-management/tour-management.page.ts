import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateTourPage } from './create-tour/create-tour.page';
import { Tour } from './tour';
import { TourServiceService } from './tour-service.service';

@Component({
  selector: 'app-tour-management',
  templateUrl: './tour-management.page.html',
  styleUrls: ['./tour-management.page.scss'],
})
export class TourManagementPage implements OnInit {
  public tourList: Array<Tour> = [];

  constructor(
    public modalCtrl: ModalController,
    private tourSvc: TourServiceService
  ) {}

  ngOnInit() {
    this.tourSvc
      .getAllTourCompany('' + localStorage.getItem('userID'))
      .subscribe(
        (resp) => {
          //console.log(resp);
          this.tourList = resp;
        },
        (err) => {
          //console.log(err);
        }
      );
  }

  public deleteTour(id: any, index: any) {
    // Remove elem from ion list
    this.tourList.splice(index, 1);
    this.tourSvc.deleteCompanyTour(id);
  }

  public async openModalCreateTour() {
    const modal = await this.modalCtrl.create({
      component: CreateTourPage,
    });
    return await modal.present();
  }
}
