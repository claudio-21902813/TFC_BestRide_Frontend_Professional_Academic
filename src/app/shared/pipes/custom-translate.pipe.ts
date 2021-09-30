import { Pipe, PipeTransform } from '@angular/core';
import { CustomTranslateService } from '../services/custom-translate.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Pipe({
  name: 'customTranslate',
})
export class CustomTranslatePipe implements PipeTransform {
  constructor(private customTranslateService: CustomTranslateService) {}

  transform(value: string): Observable<any> {
    return this.customTranslateService.currentLang.asObservable().pipe(
      switchMap(() => {
        if (value) {
          return this.customTranslateService
            .translateText(value)
            .pipe(map((result: any) => result.translated_text));
        } else {
          return of('');
        }
      })
    );
  }
}
