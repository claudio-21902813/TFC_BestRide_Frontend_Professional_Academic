import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTourPageRoutingModule } from './create-tour-routing.module';

import { CreateTourPage } from './create-tour.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTourPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [CreateTourPage],
})
export class CreateTourPageModule {}
