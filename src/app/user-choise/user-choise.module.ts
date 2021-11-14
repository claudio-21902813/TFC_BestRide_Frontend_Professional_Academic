import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserChoisePageRoutingModule } from './user-choise-routing.module';

import { UserChoisePage } from './user-choise.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserChoisePageRoutingModule,
    SharedModule,
  ],
  declarations: [UserChoisePage],
})
export class UserChoisePageModule {}
