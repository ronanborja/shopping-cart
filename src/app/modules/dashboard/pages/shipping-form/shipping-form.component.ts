import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ShippingService } from '../../services/shipping.service';
@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit {
  shipForm!: FormGroup<any>;
  ff! : FormArray;


  constructor(private cartService:CartService,
    private shippingService:ShippingService,
    private fb : FormBuilder) {}

  ngOnInit(): void {
     this.shipForm = this.fb.group({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        province: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        postalCode: new FormControl('', [Validators.required]),
        street: new FormControl('', [Validators.required]),
        phoneNo: new FormControl('', [Validators.required]),
        barangay: new FormControl('', [Validators.required])
      })
  }

  saveData(){
    this.shippingService.saveDetails(this.shipForm.value).subscribe(res =>{
      console.log(res);
    })
  }

}
