import { AuthService } from '../../modules/profile/service/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private authService: AuthService, private router: Router) {

}

  canActivate() {

    if (this.authService.IsLoggedIn()) {
      return true;
    }
    alert("You have not log in")
    this.router.navigate(['login']);
    return false;
  }


}
