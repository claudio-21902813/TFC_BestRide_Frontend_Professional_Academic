import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserChoisePage } from './user-choise.page';

const routes: Routes = [
  {
    path: '',
    component: UserChoisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserChoisePageRoutingModule {}
