import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { Company } from '../company-account/company';
import { CompanyServiceService } from '../company-account/company-service.service';
import { AlertPopup } from '../shared/services/alert-popup';
import { CreateTourPage } from '../tour-management/create-tour/create-tour.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public cop: Company = {};
  public slideOpts = {
    initialSlide: 0,
    speed: 300,
    effect: 'flip',
  };

  public dateToday: Date = new Date();

  constructor(
    private router: Router,
    private http: HttpClient,
    private alert: AlertPopup,
    private appComp: AppComponent,
    private menuCtrl: MenuController,
    private companySvc: CompanyServiceService,
    private modalController: ModalController,
  ) {
    this.companySvc.getData(localStorage.getItem('token')).subscribe((res) => {
      //console.log(res['UserAttributes'][4].Value);
      this.cop.name = res['UserAttributes'][7].Value;
    });
    if ('accountRole' in localStorage) {
      if (localStorage.getItem('accountRole') === 'driver') {
        this.appComp.removeElement('Create Tour');
        this.appComp.removeElement('Edit Tour');
        this.appComp.removeElement('Company Account');
      }
      if (localStorage.getItem('accountRole') === 'company') {
        this.appComp.removeElement('Driver Account');
      }
    }
  }

  ngOnInit() {}

  image: any;
  private file: File;

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  async uploadPhoto(fileChangeEvent) {
    // Get a reference to the file that has just been added to the input
    this.file = fileChangeEvent.target.files[0];

    await this.getBase64(this.file).then((data) => {
      this.image = data;
      console.log(this.image);
    });

    await console.log(this.image);
  }

  async openCreatePage() {
    const modal = await this.modalController.create({
      component: CreateTourPage,
    });
    await modal.present();

    await modal.onDidDismiss();
    console.log('Modal Create Tour Closed');

  }

}
