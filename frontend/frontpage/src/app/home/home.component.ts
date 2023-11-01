import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
name:String='';
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
this.name=""+this.activatedRoute.snapshot.paramMap.get('name');
console.log(this.name)

  }
  packages(ele:HTMLElement)
  {

    ele.scrollIntoView();
  }
  contact(ele:HTMLElement)
  {

    ele.scrollIntoView();
  }
  

}
