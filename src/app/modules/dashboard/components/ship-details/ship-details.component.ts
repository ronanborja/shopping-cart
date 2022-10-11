import { Component, OnInit, Input } from '@angular/core';
import { ShipDetailsService } from '../../services/ship-details.service';
import { Shipping } from '../../models/shipping';

@Component({
  selector: 'app-ship-details',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.scss']
})
export class ShipDetailsComponent implements OnInit {
 
  @Input () info! : Shipping;
 
  constructor() { }

  ngOnInit(): void {
  }
}
