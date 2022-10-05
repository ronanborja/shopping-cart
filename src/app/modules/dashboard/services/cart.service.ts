import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList : any= [];
  products = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts(){
    return this.products.asObservable();
  }

  addtoCart(product:any){
    this.cartList.push(product);
    this.products.next(this.cartList);
    this.getTotalPrice();
  }

  getTotalPrice() : number{
    let totalPrice:number = 0;
    this.cartList.map((x:any)=>{
    totalPrice += x.total;
  })
  
    return totalPrice;
}
    
// const i = this.book.findIndex( b => b.id === id)
// if(i !== -1){
//   this.book.splice(i, 1);
// }

  removeCartItem(product:any){
    this.cartList.map((a:any, index:any) => {
      if(index === a.productId){
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
