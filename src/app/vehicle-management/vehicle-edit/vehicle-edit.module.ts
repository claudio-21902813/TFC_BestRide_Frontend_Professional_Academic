import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleEditPageRoutingModule } from './vehicle-edit-routing.module';

import { VehicleEditPage } from './vehicle-edit.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleEditPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [VehicleEditPage]
})
export class VehicleEditPageModule {}
