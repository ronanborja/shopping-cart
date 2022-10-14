import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginForm !: FormGroup;

  constructor(private fb : FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm =this.fb.group({
      email : ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  login() {
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res => {
      const user = res.find((a:any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success!!");
        // this.loginForm.reset();
        localStorage.setItem('token', "qwertyuioplkjhgfdsazxcvbnm");
        localStorage.setItem('email',this.loginForm.value.email);
        if(this.loginForm.value.email=="admin123@email.com")
        {
          localStorage.setItem('userType', 'admin');
          this.router.navigate(['dashboard']);
        }
        else
        {
          localStorage.setItem('userType', 'user');
          this.router.navigate(['dashboard']);
        }
      } else{
        alert("User not found!!!");
      }
    },err =>{
      alert("Something went wrong!!!")
    })
  }



}
