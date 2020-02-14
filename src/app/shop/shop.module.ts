import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ShopRoutingModule } from './shop-routing.module'
import {RouterModule,Routes} from '@angular/router';

export const routes: Routes = [
  { path: '', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'confirm', component: ConfirmComponent},
];


@NgModule({
  declarations: [CartComponent, CheckoutComponent, ConfirmComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShopRoutingModule
  ]
})
export class ShopModule { }
