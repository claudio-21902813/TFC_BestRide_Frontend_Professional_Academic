import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTourPoiPageRoutingModule } from './edit-tour-poi-routing.module';

import { EditTourPoiPage } from './edit-tour-poi.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTourPoiPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [EditTourPoiPage],
})
export class EditTourPoiPageModule {}
