import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTranslatePipe } from './pipes/custom-translate.pipe';

@NgModule({
  declarations: [CustomTranslatePipe],
  imports: [CommonModule],
  exports: [CustomTranslatePipe],
})
export class SharedModule {}
