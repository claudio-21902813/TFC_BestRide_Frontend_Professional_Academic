import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from './company';

@Injectable({
  providedIn: 'root',
})
export class CompanyServiceService {
  private getCompanyData: string = '/getCognitoDriverEnterprise/';
  constructor(private http: HttpClient) {}

  public getData(token: string): Observable<any> {
    return this.http.get(environment.apiUrl + this.getCompanyData + token);
  }
}
