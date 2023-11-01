import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Users } from '../users';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  user =new Users;
  msg='';
  constructor(private _service: RegistrationService , private _route :Router) { }

  ngOnInit(): void {
    
  }

  loginUser(){
    console.log("this.user");
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{console.log("successfull");
      localStorage.setItem("currentUserEmail",this.user.emailId);
         this._route.navigate(['/home/'+this.user.emailId])

    } ,

      error => {console.log("exception occured");
      this.msg="Bad creditioals,please enter valid email and password";
    }
      
    )

  }

}
