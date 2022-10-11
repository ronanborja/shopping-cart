import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate() {
    let role = localStorage.getItem("userType");
    if(role == "admin") {
      return true;
    }
    alert("You don't have admin rights")
    return false;
  }

}
