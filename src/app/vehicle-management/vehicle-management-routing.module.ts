import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleManagementPage } from './vehicle-management.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleManagementPage
  },
  {
    path: 'vehicle-edit',
    loadChildren: () => import('./vehicle-edit/vehicle-edit.module').then( m => m.VehicleEditPageModule)
  },
  {
    path: 'create-vehicle',
    loadChildren: () => import('./create-vehicle/create-vehicle.module').then( m => m.CreateVehiclePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleManagementPageRoutingModule {}
