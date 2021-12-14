import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyAccountPageRoutingModule } from './company-account-routing.module';

import { CompanyAccountPage } from './company-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyAccountPageRoutingModule
  ],
  declarations: [CompanyAccountPage]
})
export class CompanyAccountPageModule {}
