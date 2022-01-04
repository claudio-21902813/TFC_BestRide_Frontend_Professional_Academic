import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinishTourPageRoutingModule } from './finish-tour-routing.module';

import { FinishTourPage } from './finish-tour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinishTourPageRoutingModule
  ],
  declarations: [FinishTourPage]
})
export class FinishTourPageModule {}
