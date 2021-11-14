import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateDriverPageRoutingModule } from './create-driver-routing.module';
import { CreateDriverPage } from './create-driver.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreateDriverPageRoutingModule,
    SharedModule,
  ],
  declarations: [CreateDriverPage],
})
export class CreateDriverPageModule {}
