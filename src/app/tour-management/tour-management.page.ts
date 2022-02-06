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
  public tourSearchTerm: string = '';
  public backupItems: any[];

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
          this.backupItems = this.tourList;
        },
        (err) => {
          //console.log(err);
        }
      );
  }

  filterItems(searchTerm) {
    return this.tourList.filter((item) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  setFilteredItems() {
    if (this.tourSearchTerm && this.tourSearchTerm.trim() != '') {
      this.tourList = this.filterItems(this.tourSearchTerm);
    } else {
      this.tourList = this.backupItems;
    }
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
