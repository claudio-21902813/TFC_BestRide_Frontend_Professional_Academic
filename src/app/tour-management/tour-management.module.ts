import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourManagementPageRoutingModule } from './tour-management-routing.module';

import { TourManagementPage } from './tour-management.page';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TourManagementPageRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MaterialModule,
  ],
  declarations: [TourManagementPage],
})
export class TourManagementPageModule {}
