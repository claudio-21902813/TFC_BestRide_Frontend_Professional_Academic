import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccountDriverPageRoutingModule } from './account-driver-routing.module';
import { AccountDriverPage } from './account-driver.page';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AccountDriverPageRoutingModule,
    SharedModule,
  ],
  declarations: [AccountDriverPage]
})
export class AccountDriverPageModule {}
