import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonItemSliding, ModalController } from '@ionic/angular';
import { CreateTourPage } from './create-tour/create-tour.page';
import { EditTourPage } from './edit-tour/edit-tour.page';
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
  public searchTour: string;

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
          console.log(resp);

          this.tourList = resp;
        },
        (err) => {
          //console.log(err);
        }
      );
  }

  backupItems = this.tourList.slice(0, 2);
  search() {
    if (this.searchTour == '') {
      this.ngOnInit();
    } else {
      this.tourList = this.tourList.filter((tour) => {
        return tour.title
          .toLocaleLowerCase()
          .match(this.searchTour.toLocaleLowerCase());
      });
    }
  }

  public deleteTour(id: any, index: any) {
    // Remove elem from ion list
    this.tourList.splice(index, 1);
    this.tourSvc.deleteCompanyTour(id);
  }

  public async tourEdit(tour: any) {
    const editTourModal = await this.modalCtrl.create({
      component: EditTourPage,
      componentProps: {
        tour: tour,
      },
    });

    return await editTourModal.present();
  }

  public async openModalCreateTour() {
    const modal = await this.modalCtrl.create({
      component: CreateTourPage,
    });
    return await modal.present();
  }
}
