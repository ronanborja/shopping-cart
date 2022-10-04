import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  env ="http://localhost:3000"
  
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.env}/product`).pipe(
      map((product:any) => {
        return product
      })
    );
 }
 
 getProductsFilteredLow(): Observable<Product[]> {
  console.log("It has been filtered");
  return this.http.get<Product[]>(`${this.env}/product`).pipe<Product[]>(
    map((product: Product[]) => {
      return product.sort((low, high) => 
        Number(low.productPrice) - Number(high.productPrice))
    })
  );
}

getProductsFilteredPriceHigh(): Observable<Product[]> {
  console.log("It has been filtered");
  return this.http.get<Product[]>(`${this.env}/product`).pipe<Product[]>(
    map((product: Product[]) => {
      return product.sort((low, high) => 
        Number(high.productPrice) - Number(low.productPrice)) 
    })
  );
}

getProductsFilteredPriceThousandUp(): Observable<Product[]> {
  return this.getProductsFilteredLow().pipe(
    map((products: Product[]) => {
      return products.filter(product => product.productPrice > 1000) 
    }));
}

getProductsFilteredPrice(min:number,max:number): Observable<Product[]> {
  
  return this.getProductsFilteredLow().pipe(
    map((products: Product[]) => {
      return products.filter(product => product.productPrice >= min && product.productPrice <=max) 
    }));
}

getProductsFilteredByName(): Observable<Product[]> {
  console.log("It has been filtered");
  return this.http.get<Product[]>(`${this.env}/product`).pipe<Product[]>(
    map((product: Product[]) => {
      return product.sort((a, b) => 
      a.productName > b.productName ? 1 : -1) 
      // (a,b) => a.name > b.name ? 1 : -1
    })
  );
}
}