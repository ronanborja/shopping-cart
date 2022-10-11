import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'shopping-cart';
  searchItem: String = '';
  

public doSearch(event:any):void{
  this.searchItem = String(event.target.value);
}
}

