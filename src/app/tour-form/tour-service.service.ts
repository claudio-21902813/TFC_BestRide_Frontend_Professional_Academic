import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from './tour-map/AddressMarker';

@Injectable({
  providedIn: 'root',
})
export class TourServiceService {
  private url: string =
    'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode';

  private suggest_url: string =
    'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest';

  private suggest_coords_url: string =
    'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates';

  constructor(private http: HttpClient) {}

  public get_address(data: any): Observable<Address> {
    return this.http.get<Address>(this.url, {
      params: {
        f: 'pjson',
        featureTypes: '',
        location: data['lng'] + ',' + data['lat'],
      },
    });
  }

  public get_suggestions(data: any): Observable<Address> {
    return this.http.get<Address>(this.suggest_url, {
      params: {
        f: 'pjson',
        text: data,
      },
    });
  }

  public get_suggestions_coords(data: any): Observable<Address> {
    return this.http.get<Address>(this.suggest_coords_url, {
      params: {
        f: 'pjson',
        address: data,
      },
    });
  }
}
