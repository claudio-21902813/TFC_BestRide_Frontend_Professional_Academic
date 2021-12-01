import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCompanyPage } from './create-company.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCompanyPage
  },
  {
    path: 'create-company-form',
    loadChildren: () => import('./create-company-form/create-company-form.module').then( m => m.CreateCompanyFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCompanyPageRoutingModule {}
