import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/modules/dashboard/services/product.service';
import { Product } from 'src/app/modules/dashboard/models/product';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  
  constructor(private productService: ProductService,
    private router:Router) { }

  ngOnInit(): void {
      this.productService.getProducts().subscribe((res) => {
        this.products = res
      });         
      }
  addNewProduct(){
    this.router.navigateByUrl('/product-form');
  }
  edit(id:number){
    this.router.navigate(['/edit/' + id ]);
  }
  delete(id:number){
    this.productService.deleteProduct(id).subscribe(res=>{
      console.log(res)
      this.ngOnInit();
    })
  }
}
