import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { RegistrationFormComponent } from './pages/registration-form/registration-form.component';
import { EditFormComponent } from './pages/edit-form/edit-form.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileItemComponent } from './components/profile-item/profile-item.component'

@NgModule({
  declarations: [
    LoginFormComponent,
    RegistrationFormComponent,
    EditFormComponent,
    ProfilePageComponent,
    ProfileItemComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
