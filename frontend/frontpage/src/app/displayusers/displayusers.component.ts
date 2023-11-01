import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { DisplayusersService } from '../displayusers.service';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-displayusers',
  templateUrl: './displayusers.component.html',
  styleUrls: ['./displayusers.component.css']
})
export class DisplayusersComponent implements OnInit {
  result:any;
  flag:boolean=false;
  constructor(private http:HttpClientModule,private allusers:DisplayusersService,private deluser:RegistrationService) { }

  ngOnInit(): void {
    this.allusers.getusers().subscribe((data)=>{
      console.warn("data",data)
      this.result=data;
    })


 
  }

  deleteuser(id:Number)
  {
    console.log(id);
this.deluser.deleteusers(id).subscribe(data=>{
    alert("sucessfully deleted")
},error=>alert("Something went wrong"));
 

  }


}
