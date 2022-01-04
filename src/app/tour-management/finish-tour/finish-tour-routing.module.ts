import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinishTourPage } from './finish-tour.page';

const routes: Routes = [
  {
    path: '',
    component: FinishTourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinishTourPageRoutingModule {}
