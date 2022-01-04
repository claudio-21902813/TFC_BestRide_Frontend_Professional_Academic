import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTourPointPage } from './create-tour-point.page';

const routes: Routes = [
  {
    path: '',
    component: CreateTourPointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateTourPointPageRoutingModule {}
