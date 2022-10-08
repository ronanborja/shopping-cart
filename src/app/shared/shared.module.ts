import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommandBarComponent } from './components/command-bar/command-bar.component';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

const MaterialComponents = [
  MatSlideToggleModule,
  FlexLayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule

]
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CommandBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    [MaterialComponents]
    
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    CommandBarComponent
  ]
})
export class SharedModule { }
