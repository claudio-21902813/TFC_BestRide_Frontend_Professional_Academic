import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateDriverPageRoutingModule } from './create-driver-routing.module';

import { CreateDriverPage } from './create-driver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateDriverPageRoutingModule
  ],
  declarations: [CreateDriverPage]
})
export class CreateDriverPageModule {}
