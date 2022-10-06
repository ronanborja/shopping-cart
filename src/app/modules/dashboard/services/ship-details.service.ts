import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipDetailsService {

  shipList:any=[];
  private data = new BehaviorSubject<any>(null);
  public dataEvent = this.data.asObservable();

  constructor() { }


  setData(data:any){
    this.data.next(data)
  }
}
