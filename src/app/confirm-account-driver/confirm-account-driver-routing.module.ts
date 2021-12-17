import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmAccountDriverPage } from './confirm-account-driver.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmAccountDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmAccountDriverPageRoutingModule {}
