import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomTranslateService {
  public currentLang: BehaviorSubject<string> = new BehaviorSubject<string>(
    'en'
  );

  constructor(private http: HttpClient) {}

  public translateText(text: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/translate/`, {
      text,
      outputLang: this.currentLang.value,
      sourceLang: 'en',
    });
  }
}
