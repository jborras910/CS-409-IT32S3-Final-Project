import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WetfoodsPage } from './wetfoods.page';

const routes: Routes = [
  {
    path: '',
    component: WetfoodsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WetfoodsPageRoutingModule {}
