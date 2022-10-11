import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Shipping } from '../../models/shipping.js';
import { ShippingService } from '../../services/shipping.service';


@Component({
  selector: 'app-pending-list',
  templateUrl: './pending-list.component.html',
  styleUrls: ['./pending-list.component.scss']
})
export class PendingListComponent implements OnInit {
  infos:Shipping[]=[];
  products:any =[];
  data:any;
  total!:number;
  total1!:number;
  fee:number = 55;
  totalItem :number = 0;
  details:any;

  constructor(private shipping:ShippingService
    ) {}
 
  ngOnInit(): void {
    this.shipping.getDetails().subscribe(res =>{
      this.infos = res
    })
  }

}
