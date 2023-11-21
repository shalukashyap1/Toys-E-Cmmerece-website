import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-actiongames',
  templateUrl: './actiongames.component.html',
  styleUrls: ['./actiongames.component.css']
})
export class ActiongamesComponent {
  data:any;
  constructor(private service:ProductsService, private route:Router){
   service.getactioncar().subscribe((val)=>{
      this.data=val;
      console.log(this.data);
     });

  }
 

}
