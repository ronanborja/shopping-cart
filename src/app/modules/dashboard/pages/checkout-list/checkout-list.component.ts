import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ShippingService } from '../../services/shipping.service';
import { Order } from '../../models/order';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Shipping } from '../../models/shipping';

@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.scss']
})
export class CheckoutListComponent implements OnInit {
  products:any =[];
  infos:Shipping[]=[];
  data:any;
  total!:number;
  total1!:number;
  fee:number = 55;
  totalItem :number = 0;
  info:any;

  userInfo = new FormGroup({
    firstName : new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phoneNo: new FormControl('', [Validators.required]),
    country:new FormControl('', [Validators.required]),
    province:new FormControl('', [Validators.required]),
    city:new FormControl('', [Validators.required]),
    postalCode:new FormControl('', [Validators.required]),
    barangay:new FormControl('', [Validators.required]),
    street:new FormControl('', [Validators.required]),
  })
 
  constructor(private cartService:CartService,
    private shipping:ShippingService
   ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res =>{
      this.products = res;
    })
    this.total = this.cartService.getTotalPrice();
    this.total1 = this.cartService.getTotalPrice() + this.fee;

    this.cartService.getProducts().subscribe(res =>{
      this.totalItem = res.reduce((quantity:any,prod:any)=>
      {
        return quantity + prod.productQuantity;
      },0);
    });
}

checkOut()
{
  this.shipping.saveDetails(this.userInfo).subscribe(res => {
    this.data = res;
  })
}


get firstName() {
  return this.userInfo.get('firstName') as FormControl;
}

get lastName() {
  return this.userInfo.get('lastName') as FormControl;
}
get phoneNo() {
  return this.userInfo.get('phoneNo') as FormControl;
}
get country() {
  return this.userInfo.get('country') as FormControl;
}
get province() {
  return this.userInfo.get('province') as FormControl;
}
get city() {
  return this.userInfo.get('city') as FormControl;
}
get barangay() {
  return this.userInfo.get('barangay') as FormControl;
}
get street() {
  return this.userInfo.get('street') as FormControl;
}

}

