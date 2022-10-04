import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  sorted = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

selectCategory:string= "";
filterPric:number=0;
selectOrder:number=0;


  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;

      this.products.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.productPrice });
      });
    });
  }

  modo(event:any) {
    switch (event.target.value) {
      case "lowestPrice":
        this.sortButtonLow();
        break;
      case "highestPrice":
        this.sortButtonHigh();
        break;
      case "Name":
        this.sortButtonName();
        break;
      case "Category":
        this.sortButtonName;
        break;
      case "priceRange1":
        this.filterPriceRange(1,100);
        break;
        case "priceRange2":
          this.filterPriceRange(101,500);
        break;
        case "priceRange3":  
        this.filterPriceRange(501,1000);
        break;
        case "priceRange4":  
        this.filterPriceRangeThousandUp();
        break;
    }
  }

  sortButtonLow() {
    return this.productService.getProductsFilteredLow().subscribe((res) => {
      this.products = res;
    });
  }

  sortButtonHigh() {
    console.log("button high function works");
    return this.productService.getProductsFilteredPriceHigh().subscribe((res) => {
        this.products = res;
      });
  }

  sortButtonName() {
    return this.productService.getProductsFilteredByName().subscribe((res) => {
      this.products = res;
    });
  }

  filterPriceRange(min:number,max:number)
  {
    return this.productService.getProductsFilteredPrice(min,max).subscribe((res) => {
      this.products = res;
    });
  }

  filterPriceRangeThousandUp() {
    return this.productService.getProductsFilteredPriceThousandUp().subscribe((res) => {
      this.products = res;
    });
  }

  addToCart(prod: any) {
    this.cartService.addtoCart(prod);
  }
}
