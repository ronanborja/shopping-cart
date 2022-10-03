import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommandBarComponent } from './components/command-bar/command-bar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CommandBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
