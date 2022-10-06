import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './modules/dashboard/pages/cart-list/cart-list.component';
import { CheckoutListComponent } from './modules/dashboard/pages/checkout-list/checkout-list.component';
import { ShippingListComponent } from './modules/dashboard/pages/shipping-list/shipping-list.component';
import { ShippingFormComponent } from './modules/dashboard/pages/shipping-form/shipping-form.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/product.module').then(m => m.ProductModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'cart',
    component: CartListComponent
  },
  {
    path: 'ship',
    component: ShippingFormComponent
  },
  {
    path: 'shiplist',
    component: ShippingListComponent
  },
  {
    path: 'checkout',
    component: CheckoutListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
