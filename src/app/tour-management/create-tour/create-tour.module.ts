import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTourPageRoutingModule } from './create-tour-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateTourPage } from './create-tour.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTourPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialModule,
  ],
  declarations: [CreateTourPage],
})
export class CreateTourPageModule {}
