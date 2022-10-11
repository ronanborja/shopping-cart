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
  searchItem:string="";
  products: Product[] = [];
  categories:string[]=[];
  minValue: number = 0;
  maxValue: number = 1000000;
  public show:boolean = false;
  public buttonName:any = 'Show';
  filterCategory:string="";
  filterSequence:number=0;
  filterOrderName:string="";
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

  findName(search:any): any
  {
    return 
  }


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

    this.cartService.search.subscribe(val=>
      {
        this.searchItem = val;
      })
    }
  
  doSort(orderValue:string)
  {
    if(this.filterOrderName==orderValue)
    { 
      if(this.filterSequence==2)
      this.filterSequence=0;
      else
      {
        this.filterSequence++;
      }
    }
    else 
    {
      this.filterOrderName = orderValue;
      this.filterSequence = 0;
    }
    this.filter(this.filterCategory,this.filterOrderName,this.minValue,this.maxValue,this.filterSequence);
    console.log(orderValue);
  }

  categoryFilterChange(category:string)
  {
    this.filterCategory=category;
    this.filter(this.filterCategory,this.filterOrderName,this.minValue,this.maxValue,this.filterSequence);
  }
  priceFilterChange(event:any) {
    this.filter(this.filterCategory,this.filterOrderName,this.minValue,this.maxValue,this.filterSequence);
  }
  
  filter(category:string,orderBy:string,min:number,max:number,filterSequence:number)
  {
     return this.productService.getProductsFilter(orderBy,category,min,max,filterSequence).subscribe((res) => {
       this.products = res;
     });
}

  addToCart(prod: Product) {
    this.cartService.addtoCart(prod);
  }

  isUser() {
    const role = localStorage.getItem("userType");
    if(role == "admin"){
      return false;
    }
     return true;
  }
  
}


