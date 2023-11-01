import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-allbookings',
  templateUrl: './allbookings.component.html',
  styleUrls: ['./allbookings.component.css']
})
export class AllbookingsComponent implements OnInit {
  data:any
  constructor(private service:BookingService) { }

  ngOnInit(): void {
    this.service.AllbookingFromRemote().subscribe((result)=>{
      console.warn("result",result)
      this.data=result;
    })
  }

}
