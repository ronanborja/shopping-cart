import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommandBarComponent } from './components/command-bar/command-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CommandBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
   
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    CommandBarComponent
  ]
})
export class SharedModule { }
