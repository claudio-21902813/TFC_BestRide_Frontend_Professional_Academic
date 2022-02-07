import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTourPageRoutingModule } from './edit-tour-routing.module';

import { EditTourPage } from './edit-tour.page';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTourPageRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
  ],
  declarations: [EditTourPage],
})
export class EditTourPageModule {}
