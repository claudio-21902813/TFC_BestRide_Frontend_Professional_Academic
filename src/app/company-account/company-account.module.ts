import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyAccountPageRoutingModule } from './company-account-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CompanyAccountPage } from './company-account.page';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyAccountPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
  ],
  declarations: [CompanyAccountPage],
})
export class CompanyAccountPageModule {}
