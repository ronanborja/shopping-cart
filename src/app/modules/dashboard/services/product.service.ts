// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { map, Observable } from 'rxjs';
// import { Product } from '../models/product';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

//   constructor(private http:HttpClient) { }
//   env ="http://localhost:3000/product"
  
//   public getProducts() {
//     return this.http.get(this.env).pipe(
//       map((product:any) => {
//         return product
//       })
//     );
//  }

//  getTopProducts()
//  {
//   return this.getProducts().pipe(map((product: Product[]) => {
//     return product.sort((a, b) => Number(b.productSales) - Number(a.productSales)) })).pipe(map((product:Product[])=>
//     product.slice(0,5)));
//  }

//  getProductById(id:any){
//   return this.http.get(`${this.env}/${id}`);
//  }

//  updateProduct(id:any, data:any){
//   return this.http.put(`${this.env}/${id}`, data);
//  }

//  deleteProduct(id:any){
//   return this.http.delete(`${this.env}/${id}`);
//  }


//  saveProducts(data : any) {
//   return this.http.post("http://localhost:3000/product",data)
//   .pipe(map((res:any) => {
//     return res;
//   }))

// }
 
// getProductsFilter(orderBy:string,category:string,min:number,max:number,sequence:number):Observable<Product[]>
// {
//   let products: Observable<Product[]>;
//   products = this.getProducts();
  
//   if(orderBy=="Price"){
//      if(sequence == 1){
//     products = products.pipe(map((product: Product[]) => {
//       return product.sort((a, b) => Number(a.productPrice) - Number(b.productPrice))})); }
//   else if(sequence==2)
//   {
//     products = products.pipe(map((product: Product[]) => {
//       return product.sort((a, b) => Number(b.productPrice) - Number(a.productPrice)) }));
//   }
//   }
//   else
// {
//   if(sequence==1)
//   {
//   products = products.pipe(map((product: Product[]) => {
//     return product.sort((a, b) => a.productName > b.productName ? 1 : -1) }));
//   }else if (sequence==2)
//   {
//   products = products.pipe(map((product: Product[]) => {
//     return product.sort((a, b) => b.productName > a.productName ? 1 : -1) }));
//   }
// }

//   products = products.pipe(map((products: Product[]) => {
//     return products.filter(product => product.productPrice >= min && product.productPrice <=max) }));

//   if(category==='')
//   {
//     return products;
//   }
//   else
//   {
//     return products = products.pipe(map((products: Product[]) => {
//       return products.filter(product => !product.productCategory.indexOf(category)) }));  
//   }
// }
// }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  env = "http://localhost:3000/product"

  public getProducts() {
    return this.http.get(this.env).pipe(
      map((product: any) => {
        return product
      })
    );
  }

  getProductById(id: any) {
    return this.http.get(`${this.env}/${id}`);
  }

  updateProduct(id: any, data: any) {
    return this.http.put(`${this.env}/${id}`, data);
  }

  deleteProduct(id: any) {
    return this.http.delete(`${this.env}/${id}`);
  }


  saveProducts(data: any) {
    return this.http.post("http://localhost:3000/product", data)
      .pipe(map((res: any) => {
        return res;
      }))

  }

  getProductsFilter(sortOrder: number, category: string, min: number, max: number): Observable<Product[]> {
    let products: Observable<Product[]>;
    products = this.getProducts();


    if (sortOrder === 1) {
      products = products.pipe(map((product: Product[]) => {
        return product.sort((a, b) => a.productName > b.productName ? 1 : -1)
      }));
    }
    else if (sortOrder == 2) {
      products = products.pipe(map((product: Product[]) => {
        return product.sort((a, b) => b.productName > a.productName ? 1 : -1)
      }));
    }

    else if (sortOrder === 3) {
      products = products.pipe(map((product: Product[]) => {
        return product.sort((a, b) => Number(a.productPrice) - Number(b.productPrice))
      }));
    }
    else if (sortOrder === 4) {
      products = products.pipe(map((product: Product[]) => {
        return product.sort((a, b) => Number(b.productPrice) - Number(a.productPrice))
      }));
    }


    products = products.pipe(map((products: Product[]) => {
      return products.filter(product => product.productPrice >= min && product.productPrice <= max)
    }));

    if (category==="") {
      return products;
    }
    else {
      return products = products.pipe(map((products: Product[]) => {
        return products.filter(product => product.productCategory.indexOf(category)>-1)
      }));

    }
  }
}