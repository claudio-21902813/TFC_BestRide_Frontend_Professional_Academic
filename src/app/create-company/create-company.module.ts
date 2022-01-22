import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCompanyPageRoutingModule } from './create-company-routing.module';

import { CreateCompanyPage } from './create-company.page';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCompanyPageRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [CreateCompanyPage],
})
export class CreateCompanyPageModule {}
