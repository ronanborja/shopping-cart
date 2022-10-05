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
  env ="http://localhost:3000/product"
  
  public getProducts() {
    return this.http.get(this.env).pipe(
      map((product:any) => {
        return product
      })
    );
 }
 


getProductsFilter(orderByPrice:number,orderByName:number,priceRange:number,category:string):Observable<Product[]>
{
  let min = [1,1,101,501,1001];
  let max = [Number.MAX_SAFE_INTEGER,100,500,1000,Number.MAX_SAFE_INTEGER];
  let products: Observable<Product[]>;
  products = this.getProducts();
  
  if(orderByPrice==1){
    products = products.pipe(map((product: Product[]) => {
      return product.sort((a, b) => Number(a.productPrice) - Number(b.productPrice))})); }
  else if(orderByPrice==2)
  {
    products = products.pipe(map((product: Product[]) => {
      return product.sort((a, b) => Number(b.productPrice) - Number(a.productPrice)) }));
  }

  if(orderByName==1)
  products = products.pipe(map((product: Product[]) => {
    return product.sort((a, b) => a.productName > b.productName ? 1 : -1) }));
  else if(orderByName==2)
  products = products.pipe(map((product: Product[]) => {
    return product.sort((a, b) => b.productName > a.productName ? 1 : -1) }));
 

  products = products.pipe(map((products: Product[]) => {
    return products.filter(product => product.productPrice >= min[priceRange] && product.productPrice <=max[priceRange]) }));

  if(category!=="")
  products = products.pipe(map((products: Product[]) => {
  return products.filter(product => !product.productCategory.indexOf(category)) }));
    
  return products;
}

}