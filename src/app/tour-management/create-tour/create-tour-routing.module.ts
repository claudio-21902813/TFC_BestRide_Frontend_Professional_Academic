import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTourPage } from './create-tour.page';

const routes: Routes = [
  {
    path: '',
    component: CreateTourPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateTourPageRoutingModule {}
