import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourMapPage } from './tour-map.page';

const routes: Routes = [
  {
    path: '',
    component: TourMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourMapPageRoutingModule {}
