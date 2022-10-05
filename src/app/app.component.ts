import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'shopping-cart';
  search: String = '';
  

public doSearch(event:any):void{
  this.search = String(event.target.value);
}

}

