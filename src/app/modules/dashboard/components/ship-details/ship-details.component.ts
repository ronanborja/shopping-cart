import { Component, OnInit } from '@angular/core';
import { ShipDetailsService } from '../../services/ship-details.service';

@Component({
  selector: 'app-ship-details',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.scss']
})
export class ShipDetailsComponent implements OnInit {

  data:any;
  constructor(private shipDetails:ShipDetailsService,) { }

  ngOnInit(): void {
    this.shipDetails.dataEvent.subscribe(res => {
      if(!!res){
        this.data = res;
        console.log(this.data)
      }
    });
  }
}
