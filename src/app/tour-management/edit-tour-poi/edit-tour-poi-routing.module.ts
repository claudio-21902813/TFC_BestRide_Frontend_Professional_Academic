import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTourPoiPage } from './edit-tour-poi.page';

const routes: Routes = [
  {
    path: '',
    component: EditTourPoiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTourPoiPageRoutingModule {}
