import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormProfessionalPageRoutingModule } from './form-professional-routing.module';

import { FormProfessionalPage } from './form-professional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormProfessionalPageRoutingModule
  ],
  declarations: [FormProfessionalPage]
})
export class FormProfessionalPageModule {}
