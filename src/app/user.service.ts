import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 

getData(){
  return this._http.get("https://dummyjson.com/users");
}
constructor(private _http:HttpClient) { }
}
