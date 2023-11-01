import { Component, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AddpackageService } from '../addpackage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpackage',
  templateUrl: './addpackage.component.html',
  styleUrls: ['./addpackage.component.css']
})
export class AddpackageComponent implements OnInit {

  constructor(private http:HttpClient,private service:AddpackageService,private route:Router) { }

  ngOnInit(): void {
  }
  Addpackage(data:any){
    this.service.SavePackage(data).subscribe((result)=>{
      console.log("result");
      this.route.navigate(['/adminlogin'])
      window.location.reload();
    })
  }

}
