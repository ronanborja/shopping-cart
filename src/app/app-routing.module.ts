import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './modules/dashboard/pages/cart-list/cart-list.component';
import { CheckoutListComponent } from './modules/dashboard/pages/checkout-list/checkout-list.component';
import { ShippingFormComponent } from './modules/dashboard/pages/shipping-form/shipping-form.component';
import { PendingListComponent } from './modules/dashboard/pages/pending-list/pending-list.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginFormComponent } from './modules/profile/pages/login-form/login-form.component';
import { DashboardComponent } from './modules/admin/pages/dashboard/dashboard.component';
import { CheckoutFormComponent } from './modules/dashboard/pages/checkout-form/checkout-form.component';
import { HomeComponent } from './modules/admin/pages/home/home.component';
import { CustomerComponent } from './modules/admin/pages/customer/customer.component';
import { CustomerItemComponent } from './modules/admin/components/customer-item/customer-item.component';
import { RegistrationFormComponent } from './modules/profile/pages/registration-form/registration-form.component';
import { ProductFormComponent } from './modules/admin/components/product-form/product-form.component';
import { RoleGuard } from './core/guards/role.guard';
import { EditFormComponent } from './modules/admin/components/edit-form/edit-form.component';
import { ProfilePageComponent } from './modules/profile/pages/profile-page/profile-page.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/product.module').then(m => m.ProductModule),canActivate:[AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),canActivate:[RoleGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),canActivate:[AuthGuard]
  },
  {
    path: 'cart',
    component: CartListComponent,canActivate:[AuthGuard]
  },
  {
    path: 'ship',
    component: ShippingFormComponent,canActivate:[AuthGuard]
  },
  {
    path: 'checkout',
    component: CheckoutListComponent,canActivate:[AuthGuard]
  },
  {
    path: 'pending',
    component: PendingListComponent,canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'signup',
    component: RegistrationFormComponent
  },
  {
    path: 'details',
    component: CheckoutFormComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: CustomerComponent,canActivate:[RoleGuard]
  },
  {
    path: 'product',
    component: DashboardComponent
  },
  {
    path: 'form',
    component: CustomerItemComponent
  },
  {
    path: 'product-form',
    component:ProductFormComponent
  },
  {
    path: 'edit/:id',
    component:EditFormComponent
  },
  {
    path:'profile/:id',
    component: ProfilePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
