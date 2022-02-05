import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTourPoiPageRoutingModule } from './view-tour-poi-routing.module';

import { ViewTourPoiPage } from './view-tour-poi.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTourPoiPageRoutingModule,
    MaterialModule,
  ],
  declarations: [ViewTourPoiPage],
})
export class ViewTourPoiPageModule {}
