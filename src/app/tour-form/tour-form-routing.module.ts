import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourFormPage } from './tour-form.page';

const routes: Routes = [
  {
    path: '',
    component: TourFormPage
  },
  {
    path: 'tour-map',
    loadChildren: () => import('./tour-map/tour-map.module').then( m => m.TourMapPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourFormPageRoutingModule {}
