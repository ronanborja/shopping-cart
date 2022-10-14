import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  editUser = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    middleName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required])
  })

  constructor(private prof:ApiService,
    private router:Router,
    private route:ActivatedRoute) { }

  user:any;
  isDisabled:boolean=true;
  editSaveBtn:string="Edit profile";
  userForm = new FormControl();
  interests:String="Biking,Watching,Gaming";
  ngOnInit(): void {
    this.prof.getUserInfo(localStorage.getItem('email')).subscribe(res=>
      {
        this.user = localStorage.getItem('user');
        this.user = JSON.parse(this.user);
        //this.interests = this.user.listofInterest.join(',');  
      });

     
    }


  editSave(id:any)
  {
    this.isDisabled? this.editSaveBtn="SAVE PROFILE":this.editSaveBtn="EDIT PROFILE";  
    this.isDisabled = !this.isDisabled;
    //this.router.navigate(['/profile/' + id ]);
    }

    update(id:any){
      this.prof.updateUser(this.route.snapshot.params['id'], this.editUser.value).subscribe(res=>{
        console.log(res)
        this.ngOnInit();
      })
    }
  }



