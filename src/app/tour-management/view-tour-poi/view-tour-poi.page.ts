import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-tour-poi',
  templateUrl: './view-tour-poi.page.html',
  styleUrls: ['./view-tour-poi.page.scss'],
})
export class ViewTourPoiPage implements OnInit {
  public poi: any;

  constructor(private modalCtrl: ModalController) {
    console.log(this.poi);
  }

  ngOnInit() {
    console.log(this.poi);
  }

  public close() {
    this.modalCtrl.dismiss();
  }
}
