import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Package } from './package';


@Injectable({
  providedIn: 'root'
})
export class AddpackageService {

  constructor(private http:HttpClient) { }

  SavePackage(data:any){
    return this.http.post("http://localhost:8080/addpackage",data)
  }

  displaypackage(){
    return this.http.get("http://localhost:8080/package");
  }

  displaypackageByid(id:number){
    return this.http.get<Package>("http://localhost:8080/packages/"+id);
  }

  deletepackage(id:Number){
    return this.http.delete("http://localhost:8080/delete/"+id)
  }
 
  UpdatePackage(id:number,data:any){
    return this.http.put("http://localhost:8080/update/"+id,data)
  }
  deleteBookingById(id:Number)
  {
    return this.http.delete("http://localhost:8080/deleteBooking/"+id);
  }

}
