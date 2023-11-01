import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DisplayusersService {

  constructor(private http:HttpClient) { }

  getusers(){
    return this.http.get('http://localhost:8080/getalluser')
  }
}
