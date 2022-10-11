import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { RegistrationFormComponent } from './pages/registration-form/registration-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent
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
export class ProfileRoutingModule { }
