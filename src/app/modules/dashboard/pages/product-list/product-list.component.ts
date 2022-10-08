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
  minValue: number = 0;
  maxValue: number = 1000000;
  public show:boolean = false;
  public buttonName:any = 'Show';
  filterCategory:string="";
  filterPrice:number=0;
  filterOrderName:number=0;
  prevSort:string="";
  sortValue:string="";
  
  
  constructor(private productService: ProductService,private cartService: CartService) {}

  options: Options = {
    floor: 1,
    ceil: 1000000,
    showTicks:true,
    stepsArray: [
      { value: 1},
      { value: 100},
      { value: 500},
      { value: 1000},
      { value: 10000},
      { value: 100000},
      { value: 1000000}  ],
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>₱" + value+"</b>";
        case LabelType.High:
          return "<b>₱" + value+"</b>";
        default:
          return "";
      }
    }
  };


  toggle() {
    this.show = !this.show;
    if(this.show) this.buttonName = "Hide";
    else  this.buttonName = "Show";
  }




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
  }

  categoryFilterChange(event:string)
  {
    this.filterCategory=event;
    console.log(this.filterCategory);
    this.filter(this.filterCategory,this.filterPrice,this.filterOrderName,this.minValue,this.maxValue);
  }
  priceFilterChange(event:any) {
    this.filterPrice = event.target.value;
    this.filter(this.filterCategory,this.filterPrice,this.filterOrderName,this.minValue,this.maxValue);
  }
  
  filter(category:string,orderByPrice:number,orderByName:number,min:number,max:number)
  {
     return this.productService.getProductsFilter(orderByPrice,orderByName,category,this.minValue,this.maxValue).subscribe((res) => {
       this.products = res;
     });
 
}

  addToCart(prod: any) {
    this.cartService.addtoCart(prod);
  }

  
}


