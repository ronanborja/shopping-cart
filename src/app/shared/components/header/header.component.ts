import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/modules/dashboard/services/cart.service';
import { ProductService} from 'src/app/modules/dashboard/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() searchItem= new EventEmitter<any>();
  totalItem :number = 0;
  constructor(private cartService:CartService,private productService:ProductService) {  }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res =>{
      this.totalItem = res.length;
    })
  }
public search(event:any): void
{
  this.searchItem.emit(event);
}

toggleDarkTheme(): void {
  document.body.classList.toggle('dark-theme');
}


}
