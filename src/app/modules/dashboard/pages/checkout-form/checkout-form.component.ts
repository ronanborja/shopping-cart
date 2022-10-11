import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {

  products:any =[];
  data:any;
  total!:number;
  total1!:number;
  fee:number = 55;
  totalItem :number = 0;

  constructor(private cartService:CartService
    ) {}
 
  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res =>{
      this.products = res;
    })
    this.total = this.cartService.getTotalPrice() + 55;

    this.cartService.getProducts().subscribe(res =>{
      this.totalItem = res.reduce((quantity:any,prod:any)=>
      {
        return quantity + prod.productQuantity;
      },0);
    });
}

}
