import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonItemSliding,
  MenuController,
  ModalController,
} from '@ionic/angular';
import { Observable } from 'rxjs';
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
  public isDrafted = true;

  constructor(
    private modalCtrl: ModalController,
    private menuCtrl: MenuController,
    private tourSvc: TourServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.tourSvc
      .getAllTourCompany('' + localStorage.getItem('userID'))
      .subscribe((resp) => {
        this.tourList = resp;
      });
  }

  ionViewDidEnter() {
    this.tourSvc
      .getAllTourCompany('' + localStorage.getItem('userID'))
      .subscribe((resp) => {
        this.tourList = resp;
      });
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
    this.router.navigate(['/create-tour']);
  }

  public openMenu() {
    this.menuCtrl.open();
    //this.statusBar.hide();
  }
}
