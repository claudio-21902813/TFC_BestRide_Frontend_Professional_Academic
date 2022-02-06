import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverManagementPageRoutingModule } from './driver-management-routing.module';

import { DriverManagementPage } from './driver-management.page';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverManagementPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [DriverManagementPage],
})
export class DriverManagementPageModule {}
