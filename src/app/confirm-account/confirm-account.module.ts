import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmAccountPageRoutingModule } from './confirm-account-routing.module';

import { ConfirmAccountPage } from './confirm-account.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    ConfirmAccountPageRoutingModule,
  ],
  declarations: [ConfirmAccountPage],
})
export class ConfirmAccountPageModule {}
