import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DryfoodsPageRoutingModule } from './dryfoods-routing.module';

import { DryfoodsPage } from './dryfoods.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DryfoodsPageRoutingModule
  ],
  declarations: [DryfoodsPage]
})
export class DryfoodsPageModule {}
