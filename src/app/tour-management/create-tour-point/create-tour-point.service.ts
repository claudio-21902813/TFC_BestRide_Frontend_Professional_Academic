import { Injectable } from '@angular/core';
import { Map, tileLayer, marker } from 'leaflet';
import { Observable } from 'rxjs';
import { TourServiceService } from '../tour-service.service';
import { CreateTourPointPage } from './create-tour-point.page';

@Injectable({
  providedIn: 'root',
})
export class CreateTourPointService {
  private map: Map;
  private newMarker: any;

  constructor(private service: TourServiceService) {}

  loadMap() {
    this.map = new Map('map').setView([38.72847, -9.13823], 13);

    tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      attribution: 'BestRide.com',
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    }).addTo(this.map);

    return this.map;
  }

  public onMapClick(e): Observable<any> {
    /**
     * Get Coordinates and address from marker
     */
    if (this.newMarker != null) {
      this.map.removeLayer(this.newMarker);
    }

    this.newMarker = marker([e.latlng.lat, e.latlng.lng]).addTo(this.map);
    const coords = {
      lat: e.latlng.lat,
      lng: e.latlng.lng,
    };
    return this.service.get_address(coords);
  }

  public markerList(res) {
    if (this.newMarker != null) {
      this.map.removeLayer(this.newMarker);
    }

    this.newMarker = marker([
      res['candidates'][0]['location'].y,
      res['candidates'][0]['location'].x,
    ]).addTo(this.map);

    this.map.setView(
      [res['candidates'][0]['location'].y, res['candidates'][0]['location'].x],
      15
    );
  }
}
