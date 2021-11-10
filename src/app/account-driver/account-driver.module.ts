import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountDriverPageRoutingModule } from './account-driver-routing.module';

import { AccountDriverPage } from './account-driver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AccountDriverPageRoutingModule
  ],
  declarations: [AccountDriverPage]
})
export class AccountDriverPageModule {}
