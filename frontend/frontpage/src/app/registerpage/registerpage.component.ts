import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from '../users';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

user =new Users();
msg="";

  constructor(private _service: RegistrationService,private _route:Router) { }

  ngOnInit(): void {

  }
  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe
    (
      data =>
      {
        console.log("response received");
        this._route.navigate(['/loginpage']);
      },
      error =>
      {
        console.log("exception occured");
        this.msg=error.error;
      }
    )
  }

}
