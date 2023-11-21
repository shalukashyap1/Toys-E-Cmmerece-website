import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn=new BehaviorSubject<boolean>(false)

  constructor(private http:HttpClient) { }
  getseller(){
    return this.http.get('http://localhost:3005/sellers',{observe:'response'}).subscribe((val)=>{
   console.log(val);
   if(val){
    this.isSellerLoggedIn.next(true);
   }
    });

  
  }
}
 
   

