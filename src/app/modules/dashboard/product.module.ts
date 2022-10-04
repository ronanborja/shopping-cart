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
import {MatSlideToggleModule} from '@angular/material/slide-toggle'

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
    PendingListComponent
   
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    [MatComponents]
  ]
})
export class ProductModule { }
