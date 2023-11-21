import { Component } from '@angular/core';
import { SellerService } from 'src/app/services/seller.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  data:any='';
  constructor(public sell:SellerService, private user:UserService){
  this.data=sell.getseller();  
  console.log(this.data);
  }


}
