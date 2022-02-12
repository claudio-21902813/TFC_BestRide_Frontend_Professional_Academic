import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from './company';

@Injectable({
  providedIn: 'root',
})
export class CompanyServiceService {
  private getCompanyData: string = '/getCognitoDriverEnterprise/';
  private deleteCompanyEnterprise: string = '/cancelAccountDriverEnterprise/';
  private deleteCompanyEnterprise_rds: string = '/deleteEmpresa/';
  private updateCompanyEnterprise_url: string = '/updateDriverEnterprise/';

  constructor(private http: HttpClient, private router: Router) {}

  public getData(token: string): Observable<any> {
    return this.http.get(environment.apiUrl + this.getCompanyData + token);
  }

  public deleteCompanyRDS(id: string) {
    this.http
      .get(environment.apiUrl + this.deleteCompanyEnterprise + id)
      .subscribe(
        (resp) => {
          console.log(resp);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  public deleteCompanyAccount(token: string) {
    this.http
      .post(environment.apiUrl + this.deleteCompanyEnterprise, { token: token })
      .subscribe(
        (resp) => {
          console.log(resp);
          //delete user of RDS
          this.deleteCompanyRDS(localStorage.getItem('userID'));
          this.router.navigate(['/login']);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  public updateCompanyAccount(token: string, data: any): void {
    this.http
      .put(environment.apiUrl + this.updateCompanyEnterprise_url + token, data)
      .subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/home']);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
