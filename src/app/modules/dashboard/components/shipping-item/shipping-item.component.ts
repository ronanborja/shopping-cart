import { Component, Input, OnInit } from '@angular/core';
import { Shipping } from '../../models/shipping';
import { ShipDetailsService } from '../../services/ship-details.service';

@Component({
  selector: 'app-shipping-item',
  templateUrl: './shipping-item.component.html',
  styleUrls: ['./shipping-item.component.scss']
})
export class ShippingItemComponent implements OnInit {
  @Input() ship!:Shipping;
  data:any;
  constructor(private shipDetails:ShipDetailsService,) { }

  ngOnInit(): void {
    
  }

}
