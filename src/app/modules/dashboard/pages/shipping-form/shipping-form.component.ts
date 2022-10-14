import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Shipping } from '../../models/shipping';
import { Validator } from '@angular/forms';
import { ShippingService } from '../../services/shipping.service';
@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit {

  
userInfo = new FormGroup({
  firstName : new FormControl(''),
  lastName: new FormControl(''),
  phoneNo: new FormControl(''),
  country:new FormControl(''),
  province:new FormControl(''),
  city:new FormControl(''),
  postalCode:new FormControl(''),
  barangay:new FormControl(''),
  street:new FormControl(''),
})

  constructor(private fb: FormBuilder,
    private shippingService:ShippingService ) { }
  


  ngOnInit(): void {
  }

  saveInfo(){
      console.log(this.userInfo.value);
  }
}
