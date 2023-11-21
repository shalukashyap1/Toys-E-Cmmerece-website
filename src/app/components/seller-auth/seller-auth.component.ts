import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

 
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
constructor(private router:Router,private http:HttpClient){}
logForm=new FormGroup({ 
  name:new FormControl("",[Validators.required,Validators.minLength(3)]),   
  email:new FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("", [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    
  })
  get f(){
    return this.logForm.controls;
  }
  login(data:any){
    this.http.get<any>('http://localhost:3005/sellers').subscribe(val=>{
      const user=val.find((a:any)=>{
        return a.email===this.logForm.value.email && a.password===this.logForm.value.password
      });
if(user){
  alert("successfully login");
  this.logForm.reset();
  this.router.navigate(['/sellredesh']);
}else{
  alert("seller not found");
  this.router.navigate(['/sell']);
}
});
console.log(this.logForm.value)
  }

}

  
