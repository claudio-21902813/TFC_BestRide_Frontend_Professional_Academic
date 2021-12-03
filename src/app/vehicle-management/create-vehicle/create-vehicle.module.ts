import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateVehiclePageRoutingModule } from './create-vehicle-routing.module';

import { CreateVehiclePage } from './create-vehicle.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateVehiclePageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [CreateVehiclePage]
})
export class CreateVehiclePageModule {}
