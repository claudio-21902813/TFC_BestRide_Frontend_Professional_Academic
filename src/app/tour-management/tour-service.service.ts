import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from './create-tour-point/AddressMarker';
import { CountryCurrency } from './finish-tour/countryCurrency';
import { Tour } from './tour';

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

  private create_tour_url: string = '/createRoute/';
  private fetch_tours: string = '/getRoadMapsByEnterprise/';
  private updateTour: string = '/updateRoadMap/';
  private delete_tour_url: string = '/deleteRoute/';

  constructor(private http: HttpClient, private router: Router) {}

  public createTour(data: any) {
    this.http
      .post(environment.apiUrl + this.create_tour_url, data)
      .subscribe((res) => {
        this.router.navigate(['/tour-management']);
      });
  }

  public editTour(id: any) {
    this.http.get(environment.apiUrl + this.updateTour + id);
  }

  public getAllTourCompany(id: any): Observable<any> {
    return this.http.get<Tour>(environment.apiUrl + this.fetch_tours + id);
  }

  public deleteCompanyTour(id: any) {
    this.http
      .delete(environment.apiUrl + this.delete_tour_url + id)
      .subscribe((response) => console.log('Deleted Tour ID:' + id));
  }

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

  public getCountryCurrencyList(): Observable<CountryCurrency[]> {
    return this.http.get<CountryCurrency[]>('./../assets/countryCurrency.json');
  }
}
