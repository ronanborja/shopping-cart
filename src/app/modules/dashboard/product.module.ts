import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartListComponent } from './pages/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CheckoutListComponent } from './pages/checkout-list/checkout-list.component';
import { CheckoutItemComponent } from './components/checkout-item/checkout-item.component';
import { PendingListComponent } from './pages/pending-list/pending-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CheckoutFormComponent } from './pages/checkout-form/checkout-form.component'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShippingItemComponent } from './components/shipping-item/shipping-item.component';
import { ShippingListComponent } from './pages/shipping-list/shipping-list.component';
import { RouterModule } from '@angular/router';
import { ShippingFormComponent } from './pages/shipping-form/shipping-form.component';
import { MatTabGroup } from '@angular/material/tabs';
import { ShipDetailsComponent } from './components/ship-details/ship-details.component';
const MatComponents = [
  MatSelectModule,
  MatFormFieldModule,
  MatSlideToggleModule
]

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    CartListComponent,
    CartItemComponent,
    CheckoutListComponent,
    CheckoutItemComponent,
    PendingListComponent,
    CheckoutFormComponent,
    ShippingItemComponent,
    ShippingListComponent,
    ShippingFormComponent,
    ShipDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    [MatComponents],
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ProductModule { }
