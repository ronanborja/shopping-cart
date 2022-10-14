import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  env = 'http://localhost:3000/signupUsers';
  
  profile = new BehaviorSubject<any>({});
  constructor(private http : HttpClient) { }

  signupInfo(data : any) {
    return this.http.post("http://localhost:3000/signupUsers",data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  getUserById(id:any){
    return this.http.get(`${this.env}/${id}`);
   }
  
  updateUser(id:any, data:any){
    return this.http.put(`${this.env}/${id}`, data);
   }

   deleteProduct(id:any){
    return this.http.delete(`${this.env}/${id}`);
   }



   getUserInfo(user:any) {
    return this.http.get("http://localhost:3000/signupUsers")
    .pipe(map((res:any) => {
      var index = res.findIndex((item:any) => item.email === user);
      if (index > -1) {
        this.profile = res[index];
        localStorage.setItem('user',JSON.stringify(this.profile));
      }
    }));
  }




  getInfo() {
    return this.http.get("http://localhost:3000/signupUsers")
    .pipe(map((res:any) => {
      return res;
    }))
  }

}
