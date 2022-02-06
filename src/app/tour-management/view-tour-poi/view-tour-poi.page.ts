import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Map, tileLayer, marker } from 'leaflet';
@Component({
  selector: 'app-view-tour-poi',
  templateUrl: './view-tour-poi.page.html',
  styleUrls: ['./view-tour-poi.page.scss'],
})
export class ViewTourPoiPage implements OnInit {
  public poi: any;
  private map: Map;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.loadMapToView();
  }

  private loadMapToView() {
    this.map = new Map('map').setView([this.poi.lat, this.poi.lng], 13);

    tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      attribution: 'BestRide.com',
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    }).addTo(this.map);

    // Add marker
    marker([this.poi.lat, this.poi.lng]).addTo(this.map);
  }

  public close() {
    this.modalCtrl.dismiss();
  }
}
