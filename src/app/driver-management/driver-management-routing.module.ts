import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverManagementPage } from './driver-management.page';

const routes: Routes = [
  {
    path: '',
    component: DriverManagementPage,
  },  {
    path: 'create-company-driver',
    loadChildren: () => import('./create-company-driver/create-company-driver.module').then( m => m.CreateCompanyDriverPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverManagementPageRoutingModule {}
