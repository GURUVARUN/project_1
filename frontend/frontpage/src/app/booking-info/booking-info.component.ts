import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddpackageService } from '../addpackage.service';
import { Bookinginfo } from '../bookinginfo';



@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.component.html',
  styleUrls: ['./booking-info.component.css']
})
export class BookingInfoComponent implements OnInit {

name:String='';
flag:boolean=false;

  bookings:Bookinginfo={} as Bookinginfo;
  constructor(private httpClient :HttpClient,
    private service:AddpackageService,
    private route:Router,
    private activatedRoute:ActivatedRoute,
    )
    {

   }

  ngOnInit(): void {
    this.name=""+this.activatedRoute.snapshot.paramMap.get('name');
console.log(this.name)
    this.getbookinginfo(this.name);
    
   
  }

  getbookinginfo(name:String){
    this.httpClient.get<any>("http://localhost:8080/getdetails/"+this.name).subscribe(
      response=>{
        console.log(response);
        this.bookings=response;
      }
    )
  }
  delete(id:Number)
  {
this.service.deleteBookingById(id).subscribe(data=>{
  alert("order cancelled")
this.flag=true
 

},error=>alert("something went worng"))
  }
 
}
