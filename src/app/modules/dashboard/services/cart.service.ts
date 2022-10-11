import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList : any= [];
  products = new BehaviorSubject<any>([]);
  search = new BehaviorSubject<string>("");
  constructor(private http: HttpClient) { }

  
  postOrder(data:any)
  {
    return this.http.post<any>("http://localhost:3000/order",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  getProducts(){
    return this.products.asObservable();
  }

  addtoCart(product:any){
   
  var index = this.cartList.findIndex((item:any) => item.productName === product.productName);

  if (index > -1) {
    this.cartList[index].productQuantity = this.cartList[index].productQuantity + 1;
  } else {
    this.cartList.push(product);
  }
    this.products.next(this.cartList);
    this.getTotalPrice();
  }

  getTotalPrice() : number{
    let totalPrice:number = 0;
    this.cartList.map((x:any)=>{
    totalPrice += (x.productPrice * x.productQuantity)
  })
    return totalPrice;
}
    
public incrementQty(product: any): number {
  this.cartList.map((x: any) => {
    if (product.productName === x.productName) {
      x.productQuantity += 1
      this.products.next(this.cartList);
      this.getTotalPrice();
    }
    this.products.next(this.cartList);
    this.getTotalPrice();
  });
  return product.productQuantity;
}

public decrementQty(product: any): number {
  this.cartList.map((x: any) => {
    if (product.productName=== x.productName) {
      if (product.productQuantity === 1){
        this.removeCartItem(product);
      }
      x.productQuantity -= 1
      this.products.next(this.cartList);
      this.getTotalPrice();
    }
    this.products.next(this.cartList);
    this.getTotalPrice();
  });
  return product.productQuantity;
}



  removeCartItem(product:any){
    this.cartList.map((a:any, index:any) => {
      if(product.productName === a.productName){
        this.cartList.splice(index,1)
      }
    })
    this.products.next(this.cartList);
  }




  removeAllCart(){
    this.cartList = []
    this.products.next(this.cartList)
  }
}
