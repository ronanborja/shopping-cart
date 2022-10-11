import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product-form',
    component: ProductFormComponent
  },
  {
    path: 'edit/:id',
    component: EditFormComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
