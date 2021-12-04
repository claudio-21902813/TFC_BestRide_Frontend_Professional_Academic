import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourMapPageRoutingModule } from './tour-map-routing.module';

import { TourMapPage } from './tour-map.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourMapPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [TourMapPage],
})
export class TourMapPageModule {}
