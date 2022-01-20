import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinishTourPageRoutingModule } from './finish-tour-routing.module';

import { FinishTourPage } from './finish-tour.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinishTourPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
  ],
  declarations: [FinishTourPage],
})
export class FinishTourPageModule {}
