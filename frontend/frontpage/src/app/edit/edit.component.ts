import { Component, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AddpackageService } from '../addpackage.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Package } from '../package';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  passed:number=0;
  pack:Package={} as Package;
  constructor(private router:ActivatedRoute,private service:AddpackageService,private _route:Router,private activatedRoute:ActivatedRoute)
   { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId=>{
      this.passed=paramsId['id']
    });
    this.service.displaypackageByid(this.passed).subscribe(data=>{
this.pack=data;
    },error=>alert("Something went wrong"));
  }
 Updatepackage(data:any){
  this.service.UpdatePackage(this.passed,data).subscribe((result)=>{
      console.log("result");
      this._route.navigate(['/adminlogin'])
    })
  }

}
