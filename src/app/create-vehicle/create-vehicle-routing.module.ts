import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateVehiclePage } from './create-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: CreateVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateVehiclePageRoutingModule {}
