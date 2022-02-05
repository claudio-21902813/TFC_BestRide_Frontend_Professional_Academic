import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormProfessionalPageRoutingModule } from './form-professional-routing.module';

import { FormProfessionalPage } from './form-professional.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormProfessionalPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
  ],
  declarations: [FormProfessionalPage],
})
export class FormProfessionalPageModule {}
