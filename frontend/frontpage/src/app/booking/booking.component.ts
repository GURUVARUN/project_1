import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {



  book =new Booking();
  msg=""
  name:String="";
  constructor(private _service : BookingService, private _route :Router,private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.name=""+this.activatedRoute.snapshot.paramMap.get('name');
    console.log(this.name);
  }

  Bookings(){
    this.book.packName=this.name;
    console.log(this.book);
  
    this._service.bookingFromRemote(this.book).subscribe(
      data=>{console.log("response received"),
      this._route.navigate(['/checkout'])},
      error => {console.log("exception occured");
      this.msg="Enter Full Name";}
    );
  }

}
