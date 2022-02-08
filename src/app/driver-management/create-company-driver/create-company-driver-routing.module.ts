import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCompanyDriverPage } from './create-company-driver.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCompanyDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCompanyDriverPageRoutingModule {}
