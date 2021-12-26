import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyAccountPageRoutingModule } from './company-account-routing.module';

import { CompanyAccountPage } from './company-account.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyAccountPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [CompanyAccountPage],
})
export class CompanyAccountPageModule {}
