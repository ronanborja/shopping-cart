import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/modules/dashboard/services/cart.service';
import { ProductService} from 'src/app/modules/dashboard/services/product.service';
import { AuthService } from './../../../modules/profile/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() searchItem= new EventEmitter<any>();
  public searchInput: string = '';
  totalItem :number = 0;
  constructor(private cartService:CartService,private productService:ProductService, private authService: AuthService) {  }

  ngOnInit(): void {
    
    this.cartService.getProducts().subscribe(res =>{
      this.totalItem = res.reduce((quantity:any,prod:any)=>
      {
        return quantity + prod.productQuantity;
      },0);
    });
  }
  
  search(input:string): void
{
  this.searchInput = input;
  console.log(this.searchInput);
  this.cartService.search.next(this.searchInput);
}

toggleDarkTheme(): void {
  document.body.classList.toggle('dark-theme');
}

isLoggedin() {

  if(this.authService.IsLoggedIn()){
    return false;
  }
  return true;

}

logout() {
  localStorage.clear();
  alert("Logout success!!")
}

isUser() {
  const role = localStorage.getItem("userType");
  if(role == "admin"){
    return false;
  }
   return true;
}

}
