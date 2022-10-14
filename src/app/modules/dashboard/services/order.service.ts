import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Order } from '../models/order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  env ="http://localhost:3000/shipping"

  constructor(private http:HttpClient) { }

  getOrders(userId:string): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.env}`).pipe<Order[]>(  
      map((data:Order[]) => {
        return data.filter(x => x.userId === userId)
      }
    ))
  }

  create(order:Order) {
    return this.http.post(`${this.env}`, order).subscribe()
  }
}
