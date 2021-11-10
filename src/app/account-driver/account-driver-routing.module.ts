import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountDriverPage } from './account-driver.page';

const routes: Routes = [
  {
    path: '',
    component: AccountDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountDriverPageRoutingModule {}
