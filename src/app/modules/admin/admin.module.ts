import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomerItemComponent } from './components/customer-item/customer-item.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CustomerComponent,
    HomeComponent,
    CustomerItemComponent,
    ProductFormComponent,
    EditFormComponent
   
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
   
  ]
})
export class AdminModule { }
