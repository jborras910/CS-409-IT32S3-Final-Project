import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RawfoodsPage } from './rawfoods.page';

const routes: Routes = [
  {
    path: '',
    component: RawfoodsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RawfoodsPageRoutingModule {}
