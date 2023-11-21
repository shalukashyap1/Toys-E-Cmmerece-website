import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
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
    this.http.post<any>('http://localhost:3005/users',this.regForm.value).subscribe(val=>{
      alert('successfully registered');
      this.router.navigate(['/signin'])
    })
  console.log(this.regForm.value);
  this.regForm.reset();

    }
}
