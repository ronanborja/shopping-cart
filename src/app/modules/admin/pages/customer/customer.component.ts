import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/modules/profile/service/api.service';
import { SignupModel } from 'src/app/modules/profile/pages/registration-form/signup.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  info:SignupModel[] = [];
  constructor(private apiService: ApiService,
    private router:Router) { }

  ngOnInit(): void {
    this.apiService.getInfo().subscribe(res => {
      this.info = res;
    })
  }
  deActivate()
{

}

addNewUser()
{
  this.router.navigateByUrl('/form');
}}
