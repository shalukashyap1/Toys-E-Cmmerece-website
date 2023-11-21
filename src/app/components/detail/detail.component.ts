import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import{UserService} from 'src/app/user.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
data:any;
constructor(private _service:UserService){
  this._service.getData().subscribe(val=>{
    this.data=val;
    console.log(this.data);
  });
}
 
  
}
   

