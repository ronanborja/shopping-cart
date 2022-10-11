import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  searchItem:string = "";
  products:any =[];
  total!:number;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res =>{
      this.products = res;
      this.total = this.cartService.getTotalPrice();
    })
  }

  incrementQty(prod:any)
  {
    this.cartService.incrementQty(prod);
  }

  decrementQty(prod:any)
  {
    this.cartService.decrementQty(prod);
  }

  removeItem(prod:any){
    this.cartService.removeCartItem(prod);
  }
}
