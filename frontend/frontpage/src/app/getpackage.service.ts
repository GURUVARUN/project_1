import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Getpackage } from './getpackage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetpackageService {

  constructor(private _http:HttpClient) { }

  public getPac(gpack :Getpackage)
  {
   return this._http.get<any>("http://localhost:8080/package");
  }
}
