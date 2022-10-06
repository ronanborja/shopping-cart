import { Component, OnInit } from '@angular/core';
import { ShippingService } from '../../services/shipping.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Shipping } from '../../models/shipping';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShipDetailsService } from '../../services/ship-details.service';

@Component({
  selector: 'app-shipping-list',
  templateUrl: './shipping-list.component.html',
  styleUrls: ['./shipping-list.component.scss']
})
export class ShippingListComponent implements OnInit {
  shipping:Shipping[]=[];

 


  constructor(private shippingService:ShippingService,
  private shipDetails: ShipDetailsService ) {}

  ngOnInit(): void {
    this.shippingService.getDetails().subscribe(res => {
      this.shipping = res;
    })
  }

  public sendData(shipping:any){
    this.shipDetails.setData(shipping);
    console.log(shipping)

  }
}
