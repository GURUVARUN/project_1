import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient }from '@angular/common/http';
import { Admin } from './admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http : HttpClient) { }

  public adminUserFromRemote(admin :Admin)
  {
   return this._http.post("http://localhost:8080/adminsignin",admin)
  } 
}
