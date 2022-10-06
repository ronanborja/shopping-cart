import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Options,LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() searchItem:String="";
  
  products: Product[] = [];
  categories:string[]=[];
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  options: Options = {
    floor: 0,
    ceil: 10000000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> P" + value;
        case LabelType.High:
          return "<b>Max price:</b> P" + value;
        default:
          return "P" + value;
      }
    }
  };
  minValue: number = 20;
  maxValue: number = 80;



filterCategory:string="";
filterPrice:number=0;
filterOrderName:number=0;
prevSort:string="";
sortValue:string="";
inverse:boolean=false;
  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
      this.categories = res.map( (a:any) => String(a.productCategory));
      this.categories = this.categories.filter((value,index)=>this.categories.indexOf(value)===index);
      res.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: Number(a.productPrice)});
      });
    });
    }
  
  doSort(event:any)
  {
    console.log(event.target.value);

    this.prevSort = this.sortValue;
    this.sortValue =event.target.value;
    if(this.prevSort === this.sortValue)
    {
      !this.inverse;
    }
  }

  categoryFilterChange(event:any)
  {
    this.filterCategory = event.target.value;
    this.filter(this.filterCategory,this.filterPrice,this.filterOrderName);
  }
  priceFilterChange(event:any) {
    this.filterPrice = event.target.value;
    this.filter(this.filterCategory,this.filterPrice,this.filterOrderName);
  }
  
  filter(category:string,orderByPrice:number,orderByName:number)
  {
     return this.productService.getProductsFilter(orderByPrice,orderByName,category).subscribe((res) => {
       this.products = res;
     });
 
}

  addToCart(prod: any) {
    this.cartService.addtoCart(prod);
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }



  
}


