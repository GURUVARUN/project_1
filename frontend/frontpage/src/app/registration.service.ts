import { Injectable } from '@angular/core';
import { Users } from './users';
import { Observable } from 'rxjs';
import { HttpClient }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  //dependance injextion from angular done by constructor
  constructor(private _http : HttpClient) { }
 
  // calling from java end points
  public loginUserFromRemote(user :Users):Observable<any>
  {
   return this._http.post<any>("http://localhost:8080/signin",user)
  } 

  public registerUserFromRemote(user :Users):Observable<any>
  {
    return this._http.post<any>("http://localhost:8080/signup",user)
  }

  deleteusers(id:Number){
    return this._http.delete("http://localhost:8080/deleteuser/"+id)
  }

}
