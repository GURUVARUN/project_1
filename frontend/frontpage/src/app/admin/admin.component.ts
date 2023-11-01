import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin =new Admin;
  msg=''; 


  constructor(private _service: AdminService , private _route :Router) { }

  ngOnInit(): void {
  }

  Adminuser(){
    console.log("this.admin");
    this._service.adminUserFromRemote(this.admin).subscribe(
      data =>{console.log("successfull");
         this._route.navigate(['/adminlogin'])

    } ,

      error => {console.log("wrong Creditials");
      this.msg="Bad creditials,please enter valid email and password";
    }
      
    )


  }

}
