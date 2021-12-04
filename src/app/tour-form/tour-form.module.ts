import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourFormPageRoutingModule } from './tour-form-routing.module';

import { TourFormPage } from './tour-form.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourFormPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [TourFormPage],
})
export class TourFormPageModule {}
