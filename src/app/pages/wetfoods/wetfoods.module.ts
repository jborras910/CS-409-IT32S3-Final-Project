import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WetfoodsPageRoutingModule } from './wetfoods-routing.module';

import { WetfoodsPage } from './wetfoods.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WetfoodsPageRoutingModule
  ],
  declarations: [WetfoodsPage]
})
export class WetfoodsPageModule {}
