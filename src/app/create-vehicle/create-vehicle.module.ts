import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateVehiclePageRoutingModule } from './create-vehicle-routing.module';

import { CreateVehiclePage } from './create-vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateVehiclePageRoutingModule
  ],
  declarations: [CreateVehiclePage]
})
export class CreateVehiclePageModule {}
