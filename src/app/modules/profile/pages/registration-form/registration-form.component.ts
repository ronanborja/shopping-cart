import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
import { Router } from '@angular/router';
// import { SignupModel } from './signup.model';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  signupForm !: FormGroup;
  

  constructor(private fb: FormBuilder, private http  :HttpClient,
    private router: Router, private api: ApiService) {

  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      userName: ['', Validators.required],
      password: ['',[Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      mobile: ['', Validators.required],
      birthDate: ['', Validators.required],
    })
    }


    submit() {
      const data = {
     firstName : this.signupForm.get('firstName')?.value,
     middleName : this.signupForm.get('middleName')?.value,
     lastName : this.signupForm.get('lastName')?.value,
     email : this.signupForm.get('email')?.value,
     userName : this.signupForm.get('userName')?.value,
     password : this.signupForm.get('password')?.value,
     confirmPassword : this.signupForm.get('confirmPassword')?.value,
     mobile : this.signupForm.get('mobile')?.value,
     birthDate : this.signupForm.get('birthDate')?.value
      }
      this.http.post<any>("http://localhost:3000/signupUsers",data)
      .subscribe(res=>{
        const data = this.signupForm.pristine || 
        (this.signupForm.value.userName.trim()=== '' ||
        this.signupForm.value.email.trim()=== '' ||
        this.signupForm.value.password.trim() === ''||
        this.signupForm.value.confirmPassword.trim === '' )
        if(data){
          if(this.signupForm.value.password != this.signupForm.value.confirmPassword){
            alert('Password not match!')
          }else{
            alert('Success!');
            this.signupForm.reset()
            this.router.navigateByUrl('/login')
          }
        }else{
          alert("Please fill up all fields")
        }
      }, err=>{
        alert("Something went wrong")
      })

    }
    get email() {
      return this.signupForm.get('email') as FormControl;
    }
  }




