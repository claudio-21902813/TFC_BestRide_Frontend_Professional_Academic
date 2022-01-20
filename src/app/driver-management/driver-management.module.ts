import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverManagementPageRoutingModule } from './driver-management-routing.module';

import { DriverManagementPage } from './driver-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverManagementPageRoutingModule
  ],
  declarations: [DriverManagementPage]
})
export class DriverManagementPageModule {}
