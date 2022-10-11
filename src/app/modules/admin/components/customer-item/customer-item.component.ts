import { Component, OnInit} from '@angular/core';
import { SignupModel } from 'src/app/modules/profile/pages/registration-form/signup.model';
import { FormGroup,  FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiService } from 'src/app/modules/profile/service/api.service';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss']
})
export class CustomerItemComponent implements OnInit {

    addUsers = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required])
})

  constructor( private api: ApiService) {

  }

  ngOnInit(): void {
    
    }

  submit(){
    this.api.signupInfo(this.addUsers.value).subscribe(res=>{
      console.log(res);
      window.location.href = "/users";
    })

  }

  }
