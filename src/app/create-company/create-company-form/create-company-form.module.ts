import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCompanyFormPageRoutingModule } from './create-company-form-routing.module';

import { CreateCompanyFormPage } from './create-company-form.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCompanyFormPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [CreateCompanyFormPage],
})
export class CreateCompanyFormPageModule {}
