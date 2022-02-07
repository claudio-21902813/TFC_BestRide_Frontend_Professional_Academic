import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTourPage } from './edit-tour.page';

const routes: Routes = [
  {
    path: '',
    component: EditTourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTourPageRoutingModule {}
