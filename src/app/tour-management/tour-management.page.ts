import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonItemSliding, ModalController } from '@ionic/angular';
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
  public itemSlidingIcon: String = 'arrow_back';
  searchword: string;
  @Output() searchcriteria = new EventEmitter<String>();
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

  backupItems = this.tourList.slice(0, 2);
  search(elem) {
    console.log(elem);

    this.backupItems = this.tourList.filter((res) => {
      return (
        res.title
          .toLocaleLowerCase()
          .indexOf(this.searchword.toLocaleLowerCase()) > -1
      );
    });

    console.log(this.backupItems);

    this.tourList = this.backupItems;
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
