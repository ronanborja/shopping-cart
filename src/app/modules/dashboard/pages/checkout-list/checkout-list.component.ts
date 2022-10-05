import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.scss']
})
export class CheckoutListComponent implements OnInit {
  products:any =[];
  
  constructor(private cartService:CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res =>{
      this.products = res;
    })
  }
}
