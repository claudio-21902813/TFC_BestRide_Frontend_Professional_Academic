import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TourServiceService {
  private url: string =
    'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode';

  constructor(private http: HttpClient) {}

  public get_address(data: any): Observable<any> {
    return this.http.get(this.url, {
      params: {
        f: 'pjson',
        featureTypes: '',
        location: data['lng'] + ',' + data['lat'],
      },
    });
  }
}
