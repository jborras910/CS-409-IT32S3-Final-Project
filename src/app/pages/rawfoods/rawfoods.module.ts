import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RawfoodsPageRoutingModule } from "./rawfoods-routing.module";

import { RawfoodsPage } from "./rawfoods.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RawfoodsPageRoutingModule],
  declarations: [RawfoodsPage],
})
export class RawfoodsPageModule {}
