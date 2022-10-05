import { Component, Input, OnInit } from '@angular/core';
import { Shipping } from '../../models/shipping';

@Component({
  selector: 'app-shipping-item',
  templateUrl: './shipping-item.component.html',
  styleUrls: ['./shipping-item.component.scss']
})
export class ShippingItemComponent implements OnInit {
  @Input() ship!:Shipping;
  constructor() { }

  ngOnInit(): void {
  }

}
