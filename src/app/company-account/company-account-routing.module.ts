import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyAccountPage } from './company-account.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyAccountPageRoutingModule {}
