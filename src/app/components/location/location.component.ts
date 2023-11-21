import { Component ,OnInit} from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  protected aFormGroup:any=FormGroup;
  constructor(private formBuilder:FormBuilder){}
ngOnInit() {
    this.aFormGroup=this.formBuilder.group({
      recaptcha:['',Validators.required]
    })
}
sitekey:string=" ";
}
