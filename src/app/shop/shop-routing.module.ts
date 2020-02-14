import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [

  {
    path: 'shop',
    loadChildren: () => import('../shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

})
export class ShopRoutingModule { }
