import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Shipping } from '../models/shipping';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  
  constructor(private http:HttpClient) { }
  env ="http://localhost:3000/shipping"
  
  public getDetails(){
    return this.http.get(this.env).pipe(
      map((shipping:any) => {
        return shipping
      })
    );
 }

 public saveDetails( data:any) {
  return this.http.post(this.env, data).pipe(
    map((shipping:any) => {
      return shipping
    })
  );
}
}
