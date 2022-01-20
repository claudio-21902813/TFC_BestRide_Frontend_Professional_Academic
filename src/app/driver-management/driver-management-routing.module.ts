import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverManagementPage } from './driver-management.page';

const routes: Routes = [
  {
    path: '',
    component: DriverManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverManagementPageRoutingModule {}
