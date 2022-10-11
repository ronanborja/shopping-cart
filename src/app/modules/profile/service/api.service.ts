import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  env = 'http://localhost:3000/signupUsers';

  constructor(private http : HttpClient) { }

  signupInfo(data : any) {
    return this.http.post("http://localhost:3000/signupUsers",data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  getInfo() {
    return this.http.get("http://localhost:3000/signupUsers")
    .pipe(map((res:any) => {
      return res;
    }))
  }

}
