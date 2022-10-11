import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { SignupModel } from './signup.model';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  signupForm !: FormGroup;
  signupModelObj : SignupModel = new SignupModel()

  constructor(private fb: FormBuilder, private http  :HttpClient,
    private router: Router, private api: ApiService) {

  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required]
    })
    }


    postSignup() {
      this.signupModelObj.fullName = this.signupForm.value.fullName;
      this.signupModelObj.email = this.signupForm.value.email;
      this.signupModelObj.password = this.signupForm.value.password;
      this.signupModelObj.mobile = this.signupForm.value.mobile;

      this.api.signupInfo(this.signupModelObj)
      .subscribe(res => {
        console.log(res);
          alert("Signup Success!!!");
          this.signupForm.reset();
          this.router.navigate(['profile/login']);
      },err => {
        alert("Something went wrong")
      })
    }



}
