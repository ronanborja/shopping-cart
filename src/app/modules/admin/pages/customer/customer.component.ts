import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/modules/profile/service/api.service';
import { Router } from '@angular/router';
import { Profile } from 'src/app/modules/profile/models/profile';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  info:Profile[] = [];
  constructor(private apiService: ApiService,
    private router:Router) { }

  ngOnInit(): void {
    this.apiService.getInfo().subscribe(res => {
      this.info = res;
    })
  }


addNewUser()
{
  this.router.navigateByUrl('/form');
}

}
