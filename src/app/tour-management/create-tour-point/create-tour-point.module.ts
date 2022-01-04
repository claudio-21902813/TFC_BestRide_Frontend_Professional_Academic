import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTourPointPageRoutingModule } from './create-tour-point-routing.module';

import { CreateTourPointPage } from './create-tour-point.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTourPointPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [CreateTourPointPage],
})
export class CreateTourPointPageModule {}
