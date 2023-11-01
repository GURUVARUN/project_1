import { Component, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AddpackageService } from '../addpackage.service';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  displaypackage:any;
  constructor(private http:HttpClient,private service:AddpackageService) { 
    this.service.displaypackage().subscribe((resu)=>{
      this.displaypackage=resu;
    })
  }

  ngOnInit(): void {
  }
  // Addpackage(data:any){
  //   this.service.SavePackage(data).subscribe((result)=>{
  //     console.log("result");
  //     window.location.reload();
  //   })
  // }

  deletepack(dp:number){
    console.log(dp)
    this.service.deletepackage(dp).subscribe((result)=>{
      console.log("result",result);
      window.location.reload();
    })
  }



}
