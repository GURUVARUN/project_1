import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Getpackage } from '../getpackage';
import { AddpackageService } from '../addpackage.service';
import { Package } from '../package';
import { Router } from '@angular/router';

@Component({
  selector: 'app-morepackages',
  templateUrl: './morepackages.component.html',
  styleUrls: ['./morepackages.component.css']
})
export class MorepackagesComponent implements OnInit {
  searchText:any
  name:any
  displaypackage:Package[]=[];
  constructor(private http:HttpClient,private service:AddpackageService,private route:Router) { 
    this.http.get<Package[]>("http://localhost:8080/package").subscribe((resu)=>{
      this.displaypackage=resu;
      console.log(this.displaypackage)
    })
  }
  ngOnInit(): void {
    
  }





}
