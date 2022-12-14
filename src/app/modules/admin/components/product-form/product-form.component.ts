import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ProductService} from 'src/app/modules/dashboard/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {


  addProducts = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    productCategory: new FormControl('', [Validators.required]),
    productPrice: new FormControl('', [Validators.required]),
    productQuantity: new FormControl('', [Validators.required]),
    productImgUrl: new FormControl('', [Validators.required])
  })

  constructor( private productService : ProductService,
    private router:Router, private route:ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit(){
    
    this.productService.saveProducts(this.addProducts.value).subscribe(res =>{
      console.log(res);
      this.router.navigateByUrl('/product');
    })
  }

  get productName() {
    return this.addProducts.get('productName') as FormControl;
  }
  get productCategory() {
    return this.addProducts.get('productCategory') as FormControl;
  }
  get productPrice() {
    return this.addProducts.get('productPrice') as FormControl;
  }
  get productQuantity() {
    return this.addProducts.get('productQuantity') as FormControl;
  }
  get productImgUrl() {
    return this.addProducts.get('productImgUrl') as FormControl;
  }


}
