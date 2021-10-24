import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormProfessionalPage } from './form-professional.page';

const routes: Routes = [
  {
    path: '',
    component: FormProfessionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormProfessionalPageRoutingModule {}
