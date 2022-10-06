import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ShipDetailsService } from '../../services/ship-details.service';



@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.scss']
})
export class CheckoutListComponent implements OnInit {
  products:any =[];
  data:any;
 
  constructor(private cartService:CartService,
    private shipDetails:ShipDetailsService,
    ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res =>{
      this.products = res;
    })
    this.shipDetails.dataEvent.subscribe(res => {
      if(!!res){
        this.data = res;
      }
    });
}


}

