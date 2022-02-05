import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTourPoiPage } from './view-tour-poi.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTourPoiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTourPoiPageRoutingModule {}
