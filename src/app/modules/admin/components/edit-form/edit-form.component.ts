import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ProductService} from 'src/app/modules/dashboard/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  editProducts = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    productCategory: new FormControl('', [Validators.required]),
    productPrice: new FormControl('', [Validators.required]),
    productQuantity: new FormControl('', [Validators.required]),
    productImgUrl: new FormControl('', [Validators.required])
  })

  ID: string | null | undefined;
  constructor( private productService : ProductService,
    private router:Router, private route:ActivatedRoute,
    private fb: FormBuilder) {

     }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.productService.getProductById(this.route.snapshot.params['id'])
    .subscribe((res:any) =>{
      console.log(res)
      this.editProducts = new FormGroup({
        productName: new FormControl(res ['productName']),
        productCategory: new FormControl(res ['productCategory']),
        productPrice: new FormControl(res ['productPrice']),
        productQuantity: new FormControl(res ['productQuantity']),
        productImgUrl: new FormControl(res ['productImgUrl'])
      })
    })
  }

  updateData(){
    this.productService.updateProduct(this.route.snapshot.params['id'], this.editProducts.value)
    .subscribe(res=>{
      console.log(res)
      this.router.navigateByUrl('/product');
    })
  }

  

}
