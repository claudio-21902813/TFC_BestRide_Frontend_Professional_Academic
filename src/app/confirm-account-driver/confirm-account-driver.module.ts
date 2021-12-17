import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmAccountDriverPageRoutingModule } from './confirm-account-driver-routing.module';

import { ConfirmAccountDriverPage } from './confirm-account-driver.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmAccountDriverPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [ConfirmAccountDriverPage]
})
export class ConfirmAccountDriverPageModule {}
