import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';

const MaterialComponents = [
  MatSelectModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatDialogModule
  

]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    [MaterialComponents],
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgxSliderModule,
    MatDialogModule,
    MatSidenavModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
