import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';

import { VehicleManagementPageRoutingModule } from './vehicle-management-routing.module';

import { VehicleManagementPage } from './vehicle-management.page';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleManagementPageRoutingModule,
    SharedModule,
    MaterialModule,
  ],
  declarations: [VehicleManagementPage]
})
export class VehicleManagementPageModule {}
