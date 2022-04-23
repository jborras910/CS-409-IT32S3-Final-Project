import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DryfoodsPage } from './dryfoods.page';

const routes: Routes = [
  {
    path: '',
    component: DryfoodsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DryfoodsPageRoutingModule {}
