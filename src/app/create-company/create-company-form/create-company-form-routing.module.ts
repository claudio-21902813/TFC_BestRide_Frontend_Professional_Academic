import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCompanyFormPage } from './create-company-form.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCompanyFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCompanyFormPageRoutingModule {}
