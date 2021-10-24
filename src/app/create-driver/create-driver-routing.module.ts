import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDriverPage } from './create-driver.page';

const routes: Routes = [
  {
    path: '',
    component: CreateDriverPage
  },
  {
    path: 'form-professional',
    loadChildren: () => import('./form-professional/form-professional.module').then( m => m.FormProfessionalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateDriverPageRoutingModule {}
