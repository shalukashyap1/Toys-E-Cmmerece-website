import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.css']
})
export class SellerRegisterComponent {
  user:any;
  constructor(private http:HttpClient,private router:Router){}
  regForm=new FormGroup({
    fname:new FormControl(""),
    lname:new FormControl(""),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    confirmPass:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
  })
  get f(){
    return this.regForm.controls;
  }
  register(data:any){
    this.user=this.regForm.value.fname;
    this.http.post<any>('http://localhost:3005/sellers',this.regForm.value).subscribe(val=>{
      alert('successfully register');
    })
  console.log(this.regForm.value);
  this.regForm.reset();
  this.router.navigate(['/sell'])
    }
  
}
